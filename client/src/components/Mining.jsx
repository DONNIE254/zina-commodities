import { motion } from "framer-motion";

function Mining() {

    const divisions = [
        {
            title: "GOLD MINING",
            image:
                "https://images.unsplash.com/photo-1610375461246-83df859d849d"
        },
        {
            title: "SILVER MINING",
            image:
                "https://images.unsplash.com/photo-1513828583688-c52646db42da"
        },
        {
            title: "RARE EARTH MINERALS",
            image:
                "https://images.unsplash.com/photo-1516937941344-00b4e0337589"
        },
        {
            title: "INDUSTRIAL MINERALS",
            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd"
        }
    ];

    return (
        <section
            style={{
                background: "#04142A",
                padding: "120px 60px",
                color: "white"
            }}
        >
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
                        marginTop: "20px",
                        fontSize: "1.2rem"
                    }}
                >
                    Responsible extraction and
                    sustainable mining operations.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(400px,1fr))",
                    gap: "30px"
                }}
            >
                {divisions.map((item, index) => (

                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.03
                        }}
                        style={{
                            height: "350px",
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: "10px"
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

                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "rgba(0,0,0,0.55)"
                            }}
                        />

                        <div
                            style={{
                                position: "absolute",
                                bottom: "30px",
                                left: "30px",
                                color: "white"
                            }}
                        >
                            <h2
                                style={{
                                    color: "#D4AF37"
                                }}
                            >
                                {item.title}
                            </h2>
                        </div>

                    </motion.div>

                ))}
            </div>
        </section>
    );
}

export default Mining;