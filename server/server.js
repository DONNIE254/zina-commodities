const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const QRCode = require("qrcode");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

const JWT_SECRET =
    process.env.JWT_SECRET ||
    "zina-commodities-secret-key-change-this";

/*
==================================================
MIDDLEWARE
==================================================
*/

app.use(
    cors({
        origin: "http://localhost:5173"
    })
);

app.use(
    express.json()
);

/*
==================================================
DATABASE CONNECTION
==================================================
*/

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(
        process.env.DB_PASSWORD
    ),
    port: Number(
        process.env.DB_PORT
    )
});

/*
==================================================
DATABASE CONNECTION TEST
==================================================
*/

pool.connect()
    .then((client) => {
        console.log(
            "Database connected successfully"
        );

        client.release();
    })
    .catch((error) => {
        console.error(
            "Database connection error:",
            error.message
        );
    });

/*
==================================================
BASIC TEST ROUTE
==================================================
*/

app.get(
    "/",
    (req, res) => {
        res.json({
            message:
                "ZINA COMMODITIES API is running"
        });
    }
);

/*
==================================================
ADMIN AUTHENTICATION MIDDLEWARE
==================================================
*/

function authenticateAdmin(
    req,
    res,
    next
) {
    const authHeader =
        req.headers.authorization;

    if (
        !authHeader ||
        !authHeader.startsWith(
            "Bearer "
        )
    ) {
        return res.status(401).json({
            message:
                "Authentication token required"
        });
    }

    const token =
        authHeader.split(
            " "
        )[1];

    try {
        const decoded =
            jwt.verify(
                token,
                JWT_SECRET
            );

        req.admin =
            decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            message:
                "Invalid or expired token"
        });
    }
}

/*
==================================================
ADMIN LOGIN
==================================================
*/

app.post(
    "/api/admin/login",
    async (req, res) => {
        try {
            const {
                username,
                password
            } = req.body;

            if (
                !username ||
                !password
            ) {
                return res.status(400).json({
                    message:
                        "Username and password are required"
                });
            }

            const result =
                await pool.query(
                    `
                    SELECT *
                    FROM admins
                    WHERE username = $1
                    LIMIT 1
                    `,
                    [username]
                );

            if (
                result.rows.length === 0
            ) {
                return res.status(401).json({
                    message:
                        "Invalid username or password"
                });
            }

            const admin =
                result.rows[0];

            const passwordMatch =
                await bcrypt.compare(
                    password,
                    admin.password_hash
                );

            if (!passwordMatch) {
                return res.status(401).json({
                    message:
                        "Invalid username or password"
                });
            }

            const token =
                jwt.sign(
                    {
                        id: admin.id,
                        username:
                            admin.username
                    },
                    JWT_SECRET,
                    {
                        expiresIn:
                            "8h"
                    }
                );

            res.json({
                message:
                    "Login successful",

                token,

                admin: {
                    id: admin.id,
                    username:
                        admin.username
                }
            });

        } catch (error) {
            console.error(
                "Admin login error:",
                error
            );

            res.status(500).json({
                message:
                    "Server error during login"
            });
        }
    }
);

/*
==================================================
GET ALL CERTIFICATES
==================================================
*/

app.get(
    "/api/admin/certificates",
    authenticateAdmin,
    async (req, res) => {
        try {
            const result =
                await pool.query(
                    `
                    SELECT
                        certificate_id,
                        holder_name,
                        commodity,
                        purity,
                        weight,
                        origin,
                        issue_date,
                        status
                    FROM certificates
                    ORDER BY issue_date DESC
                    `
                );

            res.json(
                result.rows
            );

        } catch (error) {
            console.error(
                "Fetch certificates error:",
                error
            );

            res.status(500).json({
                message:
                    "Unable to fetch certificates"
            });
        }
    }
);

/*
==================================================
CREATE NEW CERTIFICATE
==================================================
*/

app.post(
    "/api/admin/certificates",
    authenticateAdmin,
    async (req, res) => {
        try {
            const {
                holder_name,
                commodity,
                purity,
                weight,
                origin
            } = req.body;

            if (
                !holder_name ||
                !commodity ||
                !purity ||
                !weight ||
                !origin
            ) {
                return res.status(400).json({
                    message:
                        "All certificate fields are required"
                });
            }

            const countResult =
                await pool.query(
                    `
                    SELECT COUNT(*)
                    FROM certificates
                    `
                );

            const count =
                Number(
                    countResult.rows[0].count
                ) + 1;

            const certificateId =
                `ZINA-2026-${String(
                    count
                ).padStart(
                    6,
                    "0"
                )}`;

            const issueDate =
                new Date();

            const status =
                "Verified";

            const result =
                await pool.query(
                    `
                    INSERT INTO certificates
                    (
                        certificate_id,
                        holder_name,
                        commodity,
                        purity,
                        weight,
                        origin,
                        issue_date,
                        status
                    )
                    VALUES
                    (
                        $1,
                        $2,
                        $3,
                        $4,
                        $5,
                        $6,
                        $7,
                        $8
                    )
                    RETURNING *
                    `,
                    [
                        certificateId,
                        holder_name,
                        commodity,
                        purity,
                        weight,
                        origin,
                        issueDate,
                        status
                    ]
                );

            res.status(201).json({
                message:
                    "Certificate created successfully",

                certificate:
                    result.rows[0]
            });

        } catch (error) {
            console.error(
                "Create certificate error:",
                error
            );

            res.status(500).json({
                message:
                    "Unable to create certificate"
            });
        }
    }
);

/*
==================================================
PUBLIC CERTIFICATE VERIFICATION
==================================================
*/

app.get(
    "/api/certificates/:certificateId",
    async (req, res) => {
        try {
            const {
                certificateId
            } = req.params;

            const result =
                await pool.query(
                    `
                    SELECT
                        certificate_id,
                        holder_name,
                        commodity,
                        purity,
                        weight,
                        origin,
                        issue_date,
                        status
                    FROM certificates
                    WHERE certificate_id = $1
                    `,
                    [certificateId]
                );

            if (
                result.rows.length === 0
            ) {
                return res.status(404).json({
                    message:
                        "Certificate not found"
                });
            }

            res.json(
                result.rows[0]
            );

        } catch (error) {
            console.error(
                "Certificate verification error:",
                error
            );

            res.status(500).json({
                message:
                    "Server error while verifying certificate"
            });
        }
    }
);

/*
==================================================
GENERATE CERTIFICATE QR CODE
==================================================
*/

app.get(
    "/api/certificates/:certificateId/qr",
    async (req, res) => {
        try {
            const {
                certificateId
            } = req.params;

            const result =
                await pool.query(
                    `
                    SELECT certificate_id
                    FROM certificates
                    WHERE certificate_id = $1
                    `,
                    [certificateId]
                );

            if (
                result.rows.length === 0
            ) {
                return res.status(404).json({
                    message:
                        "Certificate not found"
                });
            }

            const verificationUrl =
                `http://localhost:5173/verify?certificate=${certificateId}`;

            const qrCode =
                await QRCode.toDataURL(
                    verificationUrl,
                    {
                        width: 300,
                        margin: 2
                    }
                );

            res.json({
                certificate_id:
                    certificateId,

                verification_url:
                    verificationUrl,

                qr_code:
                    qrCode
            });

        } catch (error) {
            console.error(
                "QR code generation error:",
                error
            );

            res.status(500).json({
                message:
                    "Unable to generate QR code"
            });
        }
    }
);

/*
==================================================
GET CERTIFICATE WITH QR CODE
==================================================
*/

app.get(
    "/api/certificates/:certificateId/qr-data",
    async (req, res) => {
        try {
            const {
                certificateId
            } = req.params;

            const result =
                await pool.query(
                    `
                    SELECT
                        certificate_id,
                        holder_name,
                        commodity,
                        purity,
                        weight,
                        origin,
                        issue_date,
                        status
                    FROM certificates
                    WHERE certificate_id = $1
                    `,
                    [certificateId]
                );

            if (
                result.rows.length === 0
            ) {
                return res.status(404).json({
                    message:
                        "Certificate not found"
                });
            }

            const verificationUrl =
                `http://localhost:5173/verify?certificate=${certificateId}`;

            const qrCode =
                await QRCode.toDataURL(
                    verificationUrl,
                    {
                        width: 300,
                        margin: 2
                    }
                );

            res.json({
                certificate:
                    result.rows[0],

                verification_url:
                    verificationUrl,

                qr_code:
                    qrCode
            });

        } catch (error) {
            console.error(
                "Certificate QR data error:",
                error
            );

            res.status(500).json({
                message:
                    "Unable to generate certificate QR data"
            });
        }
    }
);

/*
==================================================
START SERVER
==================================================
*/

app.listen(
    PORT,
    () => {
        console.log(
            `Server running on port ${PORT}`
        );
    }
);