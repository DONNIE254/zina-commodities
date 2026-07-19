import { motion } from "framer-motion";

function Stats() {
    const stats = [
        {
            number: "18+",
            title: "Countries Served"
        },
        {
            number: "250+",
            title: "Global Clients"
        },
        {
            number: "99.99%",
            title: "Purity Standards"
        },
        {
            number: "15",
            title: "Years Experience"
        }
    ];

    return (
        <section
            style={{
                background: "#071B36",
                padding: "100px 60px",
                color: "white"
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "70px"
                }}
            >
                <h2
                    style={{
                        color: "#D4AF37",
                        fontSize: "3rem",
                        marginBottom: "20px"
                    }}
                >
                    GLOBAL PRESENCE
                </h2>

                <p
                    style={{
                        fontSize: "1.2rem",
                        color: "#cccccc"
                    }}
                >
                    Trusted worldwide in mining,
                    refining and precious metals trading.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(250px,1fr))",
                    gap: "30px"
                }}
            >
                {stats.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.05
                        }}
                        style={{
                            background:
                                "rgba(255,255,255,0.03)",
                            padding: "50px",
                            borderRadius: "10px",
                            textAlign: "center",
                            border:
                                "1px solid rgba(212,175,55,0.2)",
                            backdropFilter:
                                "blur(10px)"
                        }}
                    >
                        <h1
                            style={{
                                color: "#D4AF37",
                                fontSize: "4rem",
                                marginBottom: "20px",
                                textShadow:
                                    "0 0 15px rgba(212,175,55,0.3)"
                            }}
                        >
                            {item.number}
                        </h1>

                        <h3>
                            {item.title}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Stats;