import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Loader() {

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const timer =
            setTimeout(() => {
                setLoading(false);
            }, 3000);

        return () =>
            clearTimeout(timer);

    }, []);

    return (

        <AnimatePresence>

            {loading && (

                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 1
                    }}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100vh",
                        background: "#04142A",

                        display: "flex",
                        flexDirection: "column",

                        justifyContent: "center",
                        alignItems: "center",

                        zIndex: 999999
                    }}
                >

                    <motion.div
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            width: "120px",
                            height: "120px",

                            borderRadius: "50%",

                            border:
                                "4px solid rgba(212,175,55,0.2)",

                            borderTop:
                                "4px solid #D4AF37",

                            marginBottom: "30px"
                        }}
                    />

                    <h1
                        style={{
                            color: "#D4AF37",
                            fontSize: "2.5rem",
                            letterSpacing: "4px"
                        }}
                    >
                        ZINA COMMODITIES
                    </h1>

                    <p
                        style={{
                            color: "#cccccc",
                            marginTop: "20px"
                        }}
                    >
                        Global Mining • Refining • Trading
                    </p>

                </motion.div>

            )}

        </AnimatePresence>

    );
}

export default Loader;