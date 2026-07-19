import { motion } from "framer-motion";

import gold from "../assets/metals/gold.jpg";
import silver from "../assets/metals/silver.jpg";
import platinum from "../assets/metals/platinum.jpg";
import palladium from "../assets/metals/palladium.jpg";

function Metals() {

    const metals = [
        {
            name: "GOLD",
            purity: "999.9 Fine Gold",
            image: gold
        },
        {
            name: "SILVER",
            purity: "999.9 Investment Silver",
            image: silver
        },
        {
            name: "PLATINUM",
            purity: "Industrial Grade Platinum",
            image: platinum
        },
        {
            name: "PALLADIUM",
            purity: "Strategic Precious Metals",
            image: palladium
        }
    ];

    return (
        <section
            style={{
                background: "#071B36",
                padding: "120px 60px",
                color: "white"
            }}
        >
            {/* Header */}
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "80px"
                }}
            >
                <h1
                    style={{
                        color: "#D4AF37",
                        fontSize: "3rem",
                        marginBottom: "20px"
                    }}
                >
                    PRECIOUS METALS
                </h1>

                <p
                    style={{
                        fontSize: "1.2rem",
                        color: "#cccccc"
                    }}
                >
                    Delivering world-class precious
                    metals and strategic commodities.
                </p>
            </div>

            {/* Cards */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(300px,1fr))",
                    gap: "35px"
                }}
            >
                {metals.map((metal, index) => (

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
                            background:
                                "rgba(255,255,255,0.03)",
                            border:
                                "1px solid rgba(212,175,55,0.25)",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.4)"
                        }}
                    >

                        {/* Image */}
                        <div
                            style={{
                                height: "250px",
                                overflow: "hidden"
                            }}
                        >
                            <img
                                src={metal.image}
                                alt={metal.name}
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
                                padding: "30px",
                                textAlign: "center"
                            }}
                        >
                            <h2
                                style={{
                                    color: "#D4AF37",
                                    fontSize: "2rem",
                                    marginBottom: "15px"
                                }}
                            >
                                {metal.name}
                            </h2>

                            <p
                                style={{
                                    color: "#cccccc",
                                    fontSize: "1rem"
                                }}
                            >
                                {metal.purity}
                            </p>
                        </div>

                    </motion.div>

                ))}
            </div>
        </section>
    );
}

export default Metals;