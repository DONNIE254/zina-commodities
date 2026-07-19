import { motion } from "framer-motion";

import gold from "../assets/mining/gold.jpg";
import copper from "../assets/mining/copper.jpg";
import cobalt from "../assets/mining/cobalt.jpg";
import lithium from "../assets/mining/lithium.jpg";

function MiningDivisions() {

    const divisions = [
        {
            title: "GOLD",
            image: gold,
            description:
                "Premium gold extraction, refining and bullion production."
        },
        {
            title: "LITHIUM",
            image: lithium,
            description:
                "Strategic battery minerals powering the global energy transition."
        },
        {
            title: "COPPER",
            image: copper,
            description:
                "Global copper mining, smelting and export operations."
        },
        {
            title: "COBALT",
            image: cobalt,
            description:
                "Critical minerals supporting advanced technology industries."
        }
    ];

    return (
        <section
            style={{
                background: "#021225",
                padding: "120px 60px",
                color: "white"
            }}
        >
            {/* Header */}

            <div
                style={{
                    textAlign: "center",
                    marginBottom: "70px"
                }}
            >
                <h1
                    style={{
                        color: "#D4AF37",
                        fontSize: "3rem"
                    }}
                >
                    MINING DIVISIONS
                </h1>

                <p
                    style={{
                        color: "#cccccc",
                        marginTop: "20px",
                        fontSize: "1.2rem"
                    }}
                >
                    Diversified global commodity operations.
                </p>
            </div>

            {/* Cards */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(350px,1fr))",
                    gap: "40px"
                }}
            >
                {divisions.map((item, index) => (

                    <motion.div
                        key={index}
                        whileHover={{
                            y: -10,
                            scale: 1.03
                        }}
                        transition={{
                            duration: 0.3
                        }}
                        style={{
                            background: "#081F3F",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow:
                                "0 20px 50px rgba(0,0,0,0.4)",
                            border:
                                "1px solid rgba(212,175,55,0.15)"
                        }}
                    >
                        {/* Image */}

                        <div
                            style={{
                                height: "300px",
                                overflow: "hidden"
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}
                            />
                        </div>

                        {/* Text */}

                        <div
                            style={{
                                padding: "30px"
                            }}
                        >
                            <h2
                                style={{
                                    color: "#D4AF37",
                                    marginBottom: "20px",
                                    fontSize: "2rem"
                                }}
                            >
                                {item.title}
                            </h2>

                            <p
                                style={{
                                    color: "#cccccc",
                                    lineHeight: "1.7"
                                }}
                            >
                                {item.description}
                            </p>

                            <button
                                style={{
                                    marginTop: "25px",
                                    background: "#D4AF37",
                                    color: "#000",
                                    border: "none",
                                    padding: "15px 30px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    fontSize: "1rem"
                                }}
                            >
                                Explore Division
                            </button>
                        </div>

                    </motion.div>

                ))}
            </div>
        </section>
    );
}

export default MiningDivisions;