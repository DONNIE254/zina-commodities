import {
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaYoutube
} from "react-icons/fa";

function Footer() {

    return (
        <footer
            style={{
                background: "#010B18",
                color: "white",
                padding: "100px 60px 40px"
            }}
        >
            {/* Top */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(250px,1fr))",
                    gap: "50px",
                    marginBottom: "60px"
                }}
            >

                {/* Company */}

                <div>
                    <h2
                        style={{
                            color: "#D4AF37"
                        }}
                    >
                        ZINA COMMODITIES
                    </h2>

                    <p
                        style={{
                            marginTop: "20px",
                            color: "#cccccc",
                            lineHeight: "1.8"
                        }}
                    >
                        Global leaders in
                        mining, refining,
                        trading and strategic
                        commodity investments.
                    </p>
                </div>

                {/* Operations */}

                <div>
                    <h3
                        style={{
                            color: "#D4AF37"
                        }}
                    >
                        OPERATIONS
                    </h3>

                    <p>Gold</p>
                    <p>Lithium</p>
                    <p>Copper</p>
                    <p>Cobalt</p>
                </div>

                {/* Locations */}

                <div>
                    <h3
                        style={{
                            color: "#D4AF37"
                        }}
                    >
                        GLOBAL OFFICES
                    </h3>

                    <p>Kenya</p>
                    <p>DR Congo</p>
                    <p>South Africa</p>
                    <p>Dubai</p>
                    <p>London</p>
                    <p>Singapore</p>
                </div>

                {/* Contact */}

                <div>
                    <h3
                        style={{
                            color: "#D4AF37"
                        }}
                    >
                        CONTACT
                    </h3>

                    <p>
                        info@zinacommodities.com
                    </p>

                    <p>
                        +254 710354594
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            marginTop: "20px",
                            fontSize: "1.5rem"
                        }}
                    >
                        <FaLinkedin />
                        <FaFacebook />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>

            </div>

            {/* Bottom */}

            <div
                style={{
                    borderTop:
                        "1px solid rgba(212,175,55,0.2)",
                    paddingTop: "30px",
                    textAlign: "center",
                    color: "#999999"
                }}
            >
                © 2026 Zina Commodities.
                All Rights Reserved.
            </div>

        </footer>
    );
}

export default Footer;