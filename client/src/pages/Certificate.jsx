import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Certificate() {
    const [searchParams] = useSearchParams();

    const [certificateId, setCertificateId] =
        useState("");

    const [certificate, setCertificate] =
        useState(null);

    const [error, setError] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const verifyCertificate = async (id) => {
        try {
            const cleanId = id.trim();

            if (!cleanId) {
                setError(
                    "Please enter a certificate ID."
                );
                return;
            }

            setLoading(true);
            setError("");
            setCertificate(null);

            const response = await fetch(
                "http://localhost:5000/api/certificates/" +
                    cleanId
            );

            const data =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Certificate not found"
                );
            }

            setCertificate(data);

        } catch (error) {
            console.error(
                "Certificate verification error:",
                error
            );

            setError(error.message);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const id =
            searchParams.get(
                "certificate"
            );

        if (id) {
            setCertificateId(id);
            verifyCertificate(id);
        }
    }, [searchParams]);

    const handleSubmit = (event) => {
        event.preventDefault();

        verifyCertificate(
            certificateId
        );
    };

    return (
        <>
            <Navbar />

            <main
                style={{
                    minHeight: "100vh",
                    background: "#021225",
                    color: "#ffffff",
                    padding:
                        "140px 8% 100px"
                }}
            >
                <div
                    style={{
                        maxWidth: "1000px",
                        margin: "0 auto",
                        textAlign: "center"
                    }}
                >
                    <p
                        style={{
                            color: "#D4AF37",
                            fontWeight: "bold",
                            letterSpacing: "3px"
                        }}
                    >
                        CERTIFICATE VERIFICATION
                    </p>

                    <h1
                        style={{
                            fontSize: "3.5rem",
                            marginBottom: "30px"
                        }}
                    >
                        Verify Your{" "}
                        <span
                            style={{
                                color: "#D4AF37"
                            }}
                        >
                            Certificate
                        </span>
                    </h1>

                    <form
                        onSubmit={
                            handleSubmit
                        }
                        style={{
                            display:
                                "flex",
                            justifyContent:
                                "center",
                            gap: "15px",
                            flexWrap:
                                "wrap",
                            marginBottom:
                                "40px"
                        }}
                    >
                        <input
                            type="text"
                            value={
                                certificateId
                            }
                            onChange={(
                                event
                            ) =>
                                setCertificateId(
                                    event
                                        .target
                                        .value
                                )
                            }
                            placeholder="ZINA-2026-000001"
                            style={{
                                width:
                                    "350px",
                                padding:
                                    "16px",
                                borderRadius:
                                    "8px",
                                border:
                                    "1px solid #D4AF37",
                                background:
                                    "#0a1d35",
                                color:
                                    "#ffffff",
                                fontSize:
                                    "1rem"
                            }}
                        />

                        <button
                            type="submit"
                            style={{
                                padding:
                                    "16px 25px",
                                background:
                                    "#D4AF37",
                                color:
                                    "#021225",
                                border:
                                    "none",
                                borderRadius:
                                    "8px",
                                fontWeight:
                                    "bold",
                                cursor:
                                    "pointer"
                            }}
                        >
                            {loading
                                ? "Verifying..."
                                : "Verify Certificate"}
                        </button>
                    </form>

                    {error && (
                        <div
                            style={{
                                background:
                                    "#5a1717",
                                padding:
                                    "20px",
                                borderRadius:
                                    "8px",
                                marginBottom:
                                    "30px"
                            }}
                        >
                            {error}
                        </div>
                    )}

                    {certificate && (
                        <div
                            style={{
                                background:
                                    "#0a1d35",
                                border:
                                    "2px solid #D4AF37",
                                borderRadius:
                                    "16px",
                                padding:
                                    "40px"
                            }}
                        >
                            <h2
                                style={{
                                    color:
                                        "#D4AF37",
                                    marginBottom:
                                        "35px"
                                }}
                            >
                                CERTIFICATE VERIFIED
                            </h2>

                            <div
                                style={{
                                    display:
                                        "grid",
                                    gridTemplateColumns:
                                        "repeat(auto-fit, minmax(220px, 1fr))",
                                    gap:
                                        "25px",
                                    textAlign:
                                        "left"
                                }}
                            >
                                <div>
                                    <strong>
                                        Certificate ID
                                    </strong>

                                    <p>
                                        {
                                            certificate.certificate_id
                                        }
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Holder Name
                                    </strong>

                                    <p>
                                        {
                                            certificate.holder_name
                                        }
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Commodity
                                    </strong>

                                    <p>
                                        {
                                            certificate.commodity
                                        }
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Purity
                                    </strong>

                                    <p>
                                        {
                                            certificate.purity
                                        }
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Weight
                                    </strong>

                                    <p>
                                        {
                                            certificate.weight
                                        }
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Origin
                                    </strong>

                                    <p>
                                        {
                                            certificate.origin
                                        }
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Issue Date
                                    </strong>

                                    <p>
                                        {new Date(
                                            certificate.issue_date
                                        ).toLocaleDateString()}
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Status
                                    </strong>

                                    <p
                                        style={{
                                            color:
                                                "#D4AF37",
                                            fontWeight:
                                                "bold"
                                        }}
                                    >
                                        {
                                            certificate.status
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* QR CODE */}

                            <div
                                style={{
                                    marginTop:
                                        "60px",
                                    paddingTop:
                                        "40px",
                                    borderTop:
                                        "1px solid #29415c",
                                    textAlign:
                                        "center"
                                }}
                            >
                                <h2
                                    style={{
                                        color:
                                            "#D4AF37"
                                    }}
                                >
                                    CERTIFICATE QR CODE
                                </h2>

                                <p
                                    style={{
                                        color:
                                            "#cccccc",
                                        marginTop:
                                            "15px"
                                    }}
                                >
                                    Scan this QR code to verify this certificate.
                                </p>

                                <div
                                    style={{
                                        marginTop:
                                            "30px",
                                        background:
                                            "#ffffff",
                                        padding:
                                            "20px",
                                        display:
                                            "inline-block",
                                        borderRadius:
                                            "12px"
                                    }}
                                >
                                    <img
                                        src={
                                            "http://localhost:5000/api/certificates/" +
                                            certificate.certificate_id +
                                            "/qr"
                                        }
                                        alt="Certificate QR Code"
                                        width="300"
                                        height="300"
                                        style={{
                                            display:
                                                "block"
                                        }}
                                    />
                                </div>

                                <br />

                                <a
                                    href={
                                        "http://localhost:5000/api/certificates/" +
                                        certificate.certificate_id +
                                        "/qr"
                                    }
                                    download={
                                        certificate.certificate_id +
                                        "-QR-Code.png"
                                    }
                                    style={{
                                        display:
                                            "inline-block",
                                        marginTop:
                                            "25px",
                                        padding:
                                            "16px 32px",
                                        background:
                                            "#D4AF37",
                                        color:
                                            "#021225",
                                        borderRadius:
                                            "8px",
                                        fontWeight:
                                            "bold",
                                        textDecoration:
                                            "none"
                                    }}
                                >
                                    Download QR Code
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Certificate;