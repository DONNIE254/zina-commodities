import { motion } from "framer-motion";

function FloatingContact() {

    return (

        <motion.a
            href="https://wa.me/254710354594?text=Hello%20Zina%20Commodities,%20I%20would%20like%20to%20make%20an%20inquiry."
            target="_blank"
            rel="noopener noreferrer"

            initial={{
                scale: 0
            }}

            animate={{
                scale: 1
            }}

            transition={{
                duration: 0.6
            }}

            whileHover={{
                scale: 1.1
            }}

            style={{
                position: "fixed",
                right: "30px",
                bottom: "30px",

                width: "75px",
                height: "75px",

                borderRadius: "50%",

                background:
                    "linear-gradient(135deg,#25D366,#128C7E)",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                fontSize: "38px",

                textDecoration: "none",

                zIndex: 9999,

                boxShadow:
                    "0 0 20px rgba(37,211,102,0.8),0 0 50px rgba(37,211,102,0.4)",

                cursor: "pointer"
            }}
        >
            💬
        </motion.a>

    );
}

export default FloatingContact;