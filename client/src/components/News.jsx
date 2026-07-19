import { motion } from "framer-motion";

function News() {

    const news = [
        {
            date: "JULY 2026",
            title:
                "Zina Commodities Expands East African Operations",
            description:
                "New strategic investments strengthen regional mining and export capabilities."
        },
        {
            date: "JUNE 2026",
            title:
                "Global Precious Metals Trading Milestone Achieved",
            description:
                "Zina Commodities records significant growth in international bullion markets."
        },
        {
            date: "MAY 2026",
            title:
                "Strategic Partnerships Signed With International Investors",
            description:
                "Long-term agreements accelerate expansion and global market access."
        }
    ];

    return (
        <section
            style={{
                background: "#021225",
                color: "white",
                padding: "120px 60px"
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
                        fontSize: "3rem"
                    }}
                >
                    NEWS & MEDIA
                </h1>

                <p
                    style={{
                        marginTop: "20px",
                        color: "#cccccc",
                        fontSize: "1.2rem"
                    }}
                >
                    Latest developments across our
                    global operations.
                </p>
            </div>

            {/* News Cards */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(320px,1fr))",
                    gap: "35px"
                }}
            >
                {news.map((item,index)=>(

                    <motion.div
                        key={index}
                        whileHover={{
                            y:-10,
                            scale:1.03
                        }}
                        transition={{
                            duration:0.3
                        }}
                        style={{
                            background:
                                "rgba(255,255,255,0.03)",
                            padding:"40px",
                            borderRadius:"20px",
                            border:
                                "1px solid rgba(212,175,55,0.15)",
                            boxShadow:
                                "0 20px 40px rgba(0,0,0,0.3)"
                        }}
                    >

                        <div
                            style={{
                                color:"#D4AF37",
                                marginBottom:"20px",
                                fontWeight:"bold"
                            }}
                        >
                            {item.date}
                        </div>

                        <h2
                            style={{
                                marginBottom:"20px",
                                lineHeight:"1.4"
                            }}
                        >
                            {item.title}
                        </h2>

                        <p
                            style={{
                                color:"#cccccc",
                                lineHeight:"1.7"
                            }}
                        >
                            {item.description}
                        </p>

                        <button
                            style={{
                                marginTop:"25px",
                                background:"transparent",
                                color:"#D4AF37",
                                border:
                                    "1px solid #D4AF37",
                                padding:"12px 25px",
                                borderRadius:"8px",
                                cursor:"pointer"
                            }}
                        >
                            Read More
                        </button>

                    </motion.div>

                ))}
            </div>

        </section>
    );
}

export default News;