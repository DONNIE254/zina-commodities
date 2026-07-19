import { motion } from "framer-motion";

function Investments() {

    const sectors = [
        {
            title: "PRECIOUS METALS",
            value: "$850M"
        },
        {
            title: "MINING OPERATIONS",
            value: "$1.2B"
        },
        {
            title: "GLOBAL TRADE",
            value: "$650M"
        },
        {
            title: "STRATEGIC MINERALS",
            value: "$400M"
        }
    ];

    return (
        <section
            style={{
                background: "#071B36",
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
                    INVESTMENTS &
                    CAPITAL MARKETS
                </h1>

                <p
                    style={{
                        marginTop: "20px",
                        color: "#cccccc",
                        fontSize: "1.2rem"
                    }}
                >
                    Building sustainable value
                    across global commodity markets.
                </p>
            </div>

            {/* Investment Cards */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(280px,1fr))",
                    gap: "30px"
                }}
            >
                {sectors.map((sector,index)=>(

                    <motion.div
                        key={index}
                        whileHover={{
                            y:-10,
                            scale:1.03
                        }}
                        style={{
                            background:
                                "rgba(255,255,255,0.03)",
                            padding:"50px",
                            borderRadius:"20px",
                            border:
                                "1px solid rgba(212,175,55,0.2)",
                            textAlign:"center",
                            boxShadow:
                                "0 20px 40px rgba(0,0,0,0.3)"
                        }}
                    >

                        <h1
                            style={{
                                color:"#D4AF37",
                                fontSize:"3rem",
                                marginBottom:"20px"
                            }}
                        >
                            {sector.value}
                        </h1>

                        <h3>
                            {sector.title}
                        </h3>

                    </motion.div>

                ))}
            </div>

            {/* Bottom Statement */}

            <div
                style={{
                    textAlign:"center",
                    marginTop:"80px"
                }}
            >
                <h2
                    style={{
                        color:"#D4AF37"
                    }}
                >
                    Institutional Partnerships
                </h2>

                <p
                    style={{
                        marginTop:"20px",
                        color:"#cccccc",
                        maxWidth:"800px",
                        marginLeft:"auto",
                        marginRight:"auto",
                        lineHeight:"1.8"
                    }}
                >
                    Zina Commodities works with
                    governments, institutional
                    investors, commodity exchanges,
                    refiners and international
                    financial institutions to create
                    long-term sustainable value.
                </p>
            </div>

        </section>
    );
}

export default Investments;