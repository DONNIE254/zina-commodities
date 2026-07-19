import { useEffect, useState } from "react";

function Dashboard() {
    const adminUser = JSON.parse(
        localStorage.getItem("adminUser")
    );

    const adminToken =
        localStorage.getItem("adminToken");

    const [holderName, setHolderName] =
        useState("");

    const [commodity, setCommodity] =
        useState("");

    const [purity, setPurity] =
        useState("");

    const [weight, setWeight] =
        useState("");

    const [origin, setOrigin] =
        useState("");

    const [certificates, setCertificates] =
        useState([]);

    const [searchTerm, setSearchTerm] =
        useState("");

    const [message, setMessage] =
        useState("");

    const [error, setError] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [
        loadingCertificates,
        setLoadingCertificates
    ] = useState(true);

    const [
        createdCertificate,
        setCreatedCertificate
    ] = useState(null);

    /*
        LOAD CERTIFICATES
    */

    const loadCertificates = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/admin/certificates",
                {
                    headers: {
                        Authorization:
                            `Bearer ${adminToken}`
                    }
                }
            );

            const data =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Unable to load certificates"
                );
            }

            setCertificates(data);

        } catch (error) {
            setError(error.message);

        } finally {
            setLoadingCertificates(
                false
            );
        }
    };

    useEffect(() => {
        loadCertificates();
    }, []);

    /*
        LOGOUT
    */

    const handleLogout = () => {
        localStorage.removeItem(
            "adminToken"
        );

        localStorage.removeItem(
            "adminUser"
        );

        window.location.href =
            "/admin/login";
    };

    /*
        CREATE CERTIFICATE
    */

    const handleSubmit = async (
        event
    ) => {
        event.preventDefault();

        setMessage("");
        setError("");
        setCreatedCertificate(null);
        setLoading(true);

        try {
            const response =
                await fetch(
                    "http://localhost:5000/api/admin/certificates",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",

                            Authorization:
                                `Bearer ${adminToken}`
                        },

                        body: JSON.stringify({
                            holder_name:
                                holderName,

                            commodity:
                                commodity,

                            purity:
                                purity,

                            weight:
                                weight,

                            origin:
                                origin
                        })
                    }
                );

            const data =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Failed to create certificate"
                );
            }

            setMessage(
                "Certificate created successfully."
            );

            setCreatedCertificate(
                data.certificate
            );

            setHolderName("");
            setCommodity("");
            setPurity("");
            setWeight("");
            setOrigin("");

            loadCertificates();

        } catch (error) {
            setError(error.message);

        } finally {
            setLoading(false);
        }
    };

    /*
        SEARCH CERTIFICATES
    */

    const filteredCertificates =
        certificates.filter(
            (certificate) => {
                const search =
                    searchTerm.toLowerCase();

                return (
                    certificate
                        .certificate_id
                        .toLowerCase()
                        .includes(search) ||

                    certificate
                        .holder_name
                        .toLowerCase()
                        .includes(search) ||

                    certificate
                        .commodity
                        .toLowerCase()
                        .includes(search)
                );
            }
        );

    /*
        DASHBOARD STATISTICS
    */

    const totalCertificates =
        certificates.length;

    const verifiedCertificates =
        certificates.filter(
            (certificate) =>
                certificate.status ===
                "Verified"
        ).length;

    const pendingCertificates =
        certificates.filter(
            (certificate) =>
                certificate.status ===
                "Pending"
        ).length;

    const revokedCertificates =
        certificates.filter(
            (certificate) =>
                certificate.status ===
                "Revoked"
        ).length;

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#04142A",
                color: "white",
                fontFamily:
                    "Arial, sans-serif",
                padding: "30px"
            }}
        >
            <div
                style={{
                    maxWidth: "1500px",
                    margin: "0 auto"
                }}
            >
                {/* HEADER */}

                <header
                    style={{
                        display: "flex",
                        justifyContent:
                            "space-between",
                        alignItems: "center",
                        borderBottom:
                            "1px solid #29415c",
                        paddingBottom: "25px",
                        marginBottom: "35px"
                    }}
                >
                    <div>
                        <h1
                            style={{
                                color:
                                    "#D4AF37",
                                margin: "0"
                            }}
                        >
                            ZINA COMMODITIES
                        </h1>

                        <p
                            style={{
                                color:
                                    "#cccccc"
                            }}
                        >
                            ENTERPRISE ADMIN
                            DASHBOARD
                        </p>

                        <p>
                            Welcome,{" "}
                            <strong>
                                {
                                    adminUser
                                        ?.username ||
                                        "Administrator"
                                }
                            </strong>
                        </p>
                    </div>

                    <button
                        onClick={
                            handleLogout
                        }
                        style={{
                            background:
                                "#D4AF37",
                            color:
                                "#04142A",
                            border: "none",
                            padding:
                                "12px 24px",
                            borderRadius:
                                "8px",
                            fontWeight:
                                "bold",
                            cursor:
                                "pointer"
                        }}
                    >
                        Logout
                    </button>
                </header>

                {/* STATISTICS */}

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "20px",
                        marginBottom:
                            "35px"
                    }}
                >
                    <div
                        style={{
                            background:
                                "#0a1d35",
                            padding: "25px",
                            borderRadius:
                                "12px",
                            border:
                                "1px solid #29415c"
                        }}
                    >
                        <h3
                            style={{
                                color:
                                    "#cccccc"
                            }}
                        >
                            Total Certificates
                        </h3>

                        <h1
                            style={{
                                color:
                                    "#D4AF37"
                            }}
                        >
                            {
                                totalCertificates
                            }
                        </h1>
                    </div>

                    <div
                        style={{
                            background:
                                "#0a1d35",
                            padding: "25px",
                            borderRadius:
                                "12px",
                            border:
                                "1px solid #29415c"
                        }}
                    >
                        <h3
                            style={{
                                color:
                                    "#cccccc"
                            }}
                        >
                            Verified
                        </h3>

                        <h1
                            style={{
                                color:
                                    "#66d19e"
                            }}
                        >
                            {
                                verifiedCertificates
                            }
                        </h1>
                    </div>

                    <div
                        style={{
                            background:
                                "#0a1d35",
                            padding: "25px",
                            borderRadius:
                                "12px",
                            border:
                                "1px solid #29415c"
                        }}
                    >
                        <h3
                            style={{
                                color:
                                    "#cccccc"
                            }}
                        >
                            Pending
                        </h3>

                        <h1
                            style={{
                                color:
                                    "#D4AF37"
                            }}
                        >
                            {
                                pendingCertificates
                            }
                        </h1>
                    </div>

                    <div
                        style={{
                            background:
                                "#0a1d35",
                            padding: "25px",
                            borderRadius:
                                "12px",
                            border:
                                "1px solid #29415c"
                        }}
                    >
                        <h3
                            style={{
                                color:
                                    "#cccccc"
                            }}
                        >
                            Revoked
                        </h3>

                        <h1
                            style={{
                                color:
                                    "#ff6b6b"
                            }}
                        >
                            {
                                revokedCertificates
                            }
                        </h1>
                    </div>
                </div>

                {/* ERROR */}

                {error && (
                    <div
                        style={{
                            background:
                                "#5a1717",
                            padding: "15px",
                            borderRadius:
                                "8px",
                            marginBottom:
                                "25px"
                        }}
                    >
                        {error}
                    </div>
                )}

                {/* MAIN CONTENT */}

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "minmax(350px, 450px) 1fr",
                        gap: "30px",
                        alignItems:
                            "start"
                    }}
                >
                    {/* CREATE CERTIFICATE */}

                    <section
                        style={{
                            background:
                                "#0a1d35",
                            padding: "30px",
                            borderRadius:
                                "15px",
                            border:
                                "1px solid #29415c"
                        }}
                    >
                        <h2
                            style={{
                                color:
                                    "#D4AF37",
                                marginTop:
                                    "0"
                            }}
                        >
                            Create Certificate
                        </h2>

                        {message && (
                            <div
                                style={{
                                    background:
                                        "#164d35",
                                    padding:
                                        "15px",
                                    borderRadius:
                                        "8px",
                                    marginBottom:
                                        "20px"
                                }}
                            >
                                {message}
                            </div>
                        )}

                        <form
                            onSubmit={
                                handleSubmit
                            }
                        >
                            <label>
                                Holder Name
                            </label>

                            <input
                                type="text"
                                value={
                                    holderName
                                }
                                onChange={(
                                    event
                                ) =>
                                    setHolderName(
                                        event
                                            .target
                                            .value
                                    )
                                }
                                required
                                placeholder="Enter holder name"
                                style={{
                                    width:
                                        "100%",
                                    padding:
                                        "12px",
                                    margin:
                                        "8px 0 18px",
                                    boxSizing:
                                        "border-box",
                                    borderRadius:
                                        "8px",
                                    border:
                                        "1px solid #29415c",
                                    background:
                                        "#04142A",
                                    color:
                                        "white"
                                }}
                            />

                            <label>
                                Commodity
                            </label>

                            <input
                                type="text"
                                value={
                                    commodity
                                }
                                onChange={(
                                    event
                                ) =>
                                    setCommodity(
                                        event
                                            .target
                                            .value
                                    )
                                }
                                required
                                placeholder="e.g. Gold"
                                style={{
                                    width:
                                        "100%",
                                    padding:
                                        "12px",
                                    margin:
                                        "8px 0 18px",
                                    boxSizing:
                                        "border-box",
                                    borderRadius:
                                        "8px",
                                    border:
                                        "1px solid #29415c",
                                    background:
                                        "#04142A",
                                    color:
                                        "white"
                                }}
                            />

                            <label>
                                Purity
                            </label>

                            <input
                                type="text"
                                value={
                                    purity
                                }
                                onChange={(
                                    event
                                ) =>
                                    setPurity(
                                        event
                                            .target
                                            .value
                                    )
                                }
                                required
                                placeholder="e.g. 99.99%"
                                style={{
                                    width:
                                        "100%",
                                    padding:
                                        "12px",
                                    margin:
                                        "8px 0 18px",
                                    boxSizing:
                                        "border-box",
                                    borderRadius:
                                        "8px",
                                    border:
                                        "1px solid #29415c",
                                    background:
                                        "#04142A",
                                    color:
                                        "white"
                                }}
                            />

                            <label>
                                Weight
                            </label>

                            <input
                                type="text"
                                value={
                                    weight
                                }
                                onChange={(
                                    event
                                ) =>
                                    setWeight(
                                        event
                                            .target
                                            .value
                                    )
                                }
                                required
                                placeholder="e.g. 1,000 grams"
                                style={{
                                    width:
                                        "100%",
                                    padding:
                                        "12px",
                                    margin:
                                        "8px 0 18px",
                                    boxSizing:
                                        "border-box",
                                    borderRadius:
                                        "8px",
                                    border:
                                        "1px solid #29415c",
                                    background:
                                        "#04142A",
                                    color:
                                        "white"
                                }}
                            />

                            <label>
                                Origin
                            </label>

                            <input
                                type="text"
                                value={
                                    origin
                                }
                                onChange={(
                                    event
                                ) =>
                                    setOrigin(
                                        event
                                            .target
                                            .value
                                    )
                                }
                                required
                                placeholder="e.g. East Africa"
                                style={{
                                    width:
                                        "100%",
                                    padding:
                                        "12px",
                                    margin:
                                        "8px 0 25px",
                                    boxSizing:
                                        "border-box",
                                    borderRadius:
                                        "8px",
                                    border:
                                        "1px solid #29415c",
                                    background:
                                        "#04142A",
                                    color:
                                        "white"
                                }}
                            />

                            <button
                                type="submit"
                                disabled={
                                    loading
                                }
                                style={{
                                    width:
                                        "100%",
                                    padding:
                                        "15px",
                                    background:
                                        "#D4AF37",
                                    color:
                                        "#04142A",
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
                                    ? "Creating..."
                                    : "Create Certificate"}
                            </button>
                        </form>

                        {createdCertificate && (
                            <div
                                style={{
                                    marginTop:
                                        "25px",
                                    padding:
                                        "20px",
                                    background:
                                        "#04142A",
                                    border:
                                        "1px solid #D4AF37",
                                    borderRadius:
                                        "8px"
                                }}
                            >
                                <h3
                                    style={{
                                        color:
                                            "#D4AF37"
                                    }}
                                >
                                    Created Successfully
                                </h3>

                                <p>
                                    Certificate ID:
                                </p>

                                <strong
                                    style={{
                                        color:
                                            "#D4AF37"
                                    }}
                                >
                                    {
                                        createdCertificate
                                            .certificate_id
                                    }
                                </strong>

                                <br />

                                <a
                                    href={
                                        `/verify?certificate=${createdCertificate.certificate_id}`
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        display:
                                            "inline-block",
                                        marginTop:
                                            "15px",
                                        color:
                                            "#D4AF37"
                                    }}
                                >
                                    View Certificate
                                </a>
                            </div>
                        )}
                    </section>

                    {/* CERTIFICATE LIST */}

                    <section
                        style={{
                            background:
                                "#0a1d35",
                            padding: "30px",
                            borderRadius:
                                "15px",
                            border:
                                "1px solid #29415c",
                            overflowX:
                                "auto"
                        }}
                    >
                        <h2
                            style={{
                                color:
                                    "#D4AF37",
                                marginTop:
                                    "0"
                            }}
                        >
                            Issued Certificates
                        </h2>

                        <input
                            type="text"
                            placeholder="Search certificate ID, holder, or commodity..."
                            value={
                                searchTerm
                            }
                            onChange={(
                                event
                            ) =>
                                setSearchTerm(
                                    event
                                        .target
                                        .value
                                )
                            }
                            style={{
                                width:
                                    "100%",
                                padding:
                                    "14px",
                                marginBottom:
                                    "25px",
                                boxSizing:
                                    "border-box",
                                borderRadius:
                                    "8px",
                                border:
                                    "1px solid #29415c",
                                background:
                                    "#04142A",
                                color:
                                    "white"
                            }}
                        />

                        {loadingCertificates ? (
                            <p>
                                Loading certificates...
                            </p>
                        ) : filteredCertificates.length ===
                          0 ? (
                            <p>
                                No certificates found.
                            </p>
                        ) : (
                            <table
                                style={{
                                    width:
                                        "100%",
                                    borderCollapse:
                                        "collapse"
                                }}
                            >
                                <thead>
                                    <tr>
                                        <th
                                            style={{
                                                textAlign:
                                                    "left",
                                                padding:
                                                    "12px",
                                                color:
                                                    "#D4AF37"
                                            }}
                                        >
                                            Certificate ID
                                        </th>

                                        <th
                                            style={{
                                                textAlign:
                                                    "left",
                                                padding:
                                                    "12px",
                                                color:
                                                    "#D4AF37"
                                            }}
                                        >
                                            Holder
                                        </th>

                                        <th
                                            style={{
                                                textAlign:
                                                    "left",
                                                padding:
                                                    "12px",
                                                color:
                                                    "#D4AF37"
                                            }}
                                        >
                                            Commodity
                                        </th>

                                        <th
                                            style={{
                                                textAlign:
                                                    "left",
                                                padding:
                                                    "12px",
                                                color:
                                                    "#D4AF37"
                                            }}
                                        >
                                            Status
                                        </th>

                                        <th
                                            style={{
                                                padding:
                                                    "12px",
                                                color:
                                                    "#D4AF37"
                                            }}
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredCertificates.map(
                                        (
                                            certificate
                                        ) => (
                                            <tr
                                                key={
                                                    certificate
                                                        .certificate_id
                                                }
                                            >
                                                <td
                                                    style={{
                                                        padding:
                                                            "12px",
                                                        borderTop:
                                                            "1px solid #29415c"
                                                    }}
                                                >
                                                    {
                                                        certificate
                                                            .certificate_id
                                                    }
                                                </td>

                                                <td
                                                    style={{
                                                        padding:
                                                            "12px",
                                                        borderTop:
                                                            "1px solid #29415c"
                                                    }}
                                                >
                                                    {
                                                        certificate
                                                            .holder_name
                                                    }
                                                </td>

                                                <td
                                                    style={{
                                                        padding:
                                                            "12px",
                                                        borderTop:
                                                            "1px solid #29415c"
                                                    }}
                                                >
                                                    {
                                                        certificate
                                                            .commodity
                                                    }
                                                </td>

                                                <td
                                                    style={{
                                                        padding:
                                                            "12px",
                                                        borderTop:
                                                            "1px solid #29415c",
                                                        color:
                                                            certificate.status ===
                                                            "Verified"
                                                                ? "#66d19e"
                                                                : certificate.status ===
                                                                  "Revoked"
                                                                ? "#ff6b6b"
                                                                : "#D4AF37"
                                                    }}
                                                >
                                                    {
                                                        certificate
                                                            .status
                                                    }
                                                </td>

                                                <td
                                                    style={{
                                                        padding:
                                                            "12px",
                                                        borderTop:
                                                            "1px solid #29415c"
                                                    }}
                                                >
                                                    <a
                                                        href={
                                                            `/verify?certificate=${certificate.certificate_id}`
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        style={{
                                                            color:
                                                                "#D4AF37"
                                                        }}
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;