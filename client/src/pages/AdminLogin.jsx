import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const navigate = useNavigate();

    const [username, setUsername] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [error, setError] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const handleSubmit = async (
        event
    ) => {
        event.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response =
                await fetch(
                    "http://https://zina-commodities-api.onrender.com/api/admin/login",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            username,
                            password
                        })
                    }
                );

            const data =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Login failed"
                );
            }

            localStorage.setItem(
                "adminToken",
                data.token
            );

            localStorage.setItem(
                "adminUser",
                JSON.stringify(
                    data.admin
                )
            );

            navigate(
                "/admin/dashboard"
            );

        } catch (error) {
            setError(
                error.message
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                minHeight:
                    "100vh",
                background:
                    "linear-gradient(135deg, #021225, #0b2945)",
                display:
                    "flex",
                alignItems:
                    "center",
                justifyContent:
                    "center",
                padding:
                    "30px"
            }}
        >
            <div
                style={{
                    width:
                        "100%",
                    maxWidth:
                        "450px",
                    background:
                        "#0a1d35",
                    padding:
                        "45px",
                    borderRadius:
                        "16px",
                    border:
                        "1px solid #D4AF37",
                    boxShadow:
                        "0 20px 60px rgba(0,0,0,0.4)"
                }}
            >
                <div
                    style={{
                        textAlign:
                            "center",
                        marginBottom:
                            "35px"
                    }}
                >
                    <h1
                        style={{
                            color:
                                "#D4AF37",
                            marginBottom:
                                "10px"
                        }}
                    >
                        ZINA
                    </h1>

                    <p
                        style={{
                            color:
                                "#ffffff",
                            letterSpacing:
                                "2px"
                        }}
                    >
                        ADMINISTRATOR LOGIN
                    </p>
                </div>

                {error && (
                    <div
                        style={{
                            background:
                                "#5a1717",
                            color:
                                "#ffffff",
                            padding:
                                "15px",
                            borderRadius:
                                "8px",
                            marginBottom:
                                "20px",
                            textAlign:
                                "center"
                        }}
                    >
                        {error}
                    </div>
                )}

                <form
                    onSubmit={
                        handleSubmit
                    }
                >
                    <label
                        style={{
                            color:
                                "#D4AF37",
                            display:
                                "block",
                            marginBottom:
                                "8px"
                        }}
                    >
                        Username
                    </label>

                    <input
                        type="text"
                        value={
                            username
                        }
                        onChange={(
                            event
                        ) =>
                            setUsername(
                                event
                                    .target
                                    .value
                            )
                        }
                        required
                        style={{
                            width:
                                "100%",
                            padding:
                                "14px",
                            marginBottom:
                                "20px",
                            borderRadius:
                                "8px",
                            border:
                                "1px solid #29415c",
                            background:
                                "#021225",
                            color:
                                "#ffffff",
                            fontSize:
                                "1rem",
                            boxSizing:
                                "border-box"
                        }}
                    />

                    <label
                        style={{
                            color:
                                "#D4AF37",
                            display:
                                "block",
                            marginBottom:
                                "8px"
                        }}
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        value={
                            password
                        }
                        onChange={(
                            event
                        ) =>
                            setPassword(
                                event
                                    .target
                                    .value
                            )
                        }
                        required
                        style={{
                            width:
                                "100%",
                            padding:
                                "14px",
                            marginBottom:
                                "25px",
                            borderRadius:
                                "8px",
                            border:
                                "1px solid #29415c",
                            background:
                                "#021225",
                            color:
                                "#ffffff",
                            fontSize:
                                "1rem",
                            boxSizing:
                                "border-box"
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
                            border:
                                "none",
                            borderRadius:
                                "8px",
                            background:
                                "#D4AF37",
                            color:
                                "#021225",
                            fontWeight:
                                "bold",
                            fontSize:
                                "1rem",
                            cursor:
                                "pointer"
                        }}
                    >
                        {loading
                            ? "Signing in..."
                            : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;