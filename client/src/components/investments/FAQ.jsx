import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Who can invest in Zina Commodities?",
    answer:
      "We welcome institutional investors, strategic partners, private equity firms, family offices and qualified private investors interested in Africa's mineral sector.",
  },
  {
    question: "What sectors can I invest in?",
    answer:
      "Investment opportunities include gold, lithium, copper, cobalt, refining infrastructure, logistics and international commodity trading.",
  },
  {
    question: "How is investment security ensured?",
    answer:
      "Every investment follows strict legal agreements, corporate governance, financial reporting and internationally accepted compliance standards.",
  },
  {
    question: "Does Zina Commodities follow ESG principles?",
    answer:
      "Yes. Environmental stewardship, social responsibility and transparent governance are integrated throughout our operations.",
  },
  {
    question: "How do I begin investing?",
    answer:
      "Simply contact our investment team. After an initial consultation, we provide project information, due diligence documents and partnership options.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      style={{
        padding: "110px 8%",
        background: "#021225",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            color: "#D4AF37",
            fontSize: "3rem",
            marginBottom: "70px",
          }}
        >
          Frequently Asked Questions
        </motion.h2>

        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .1 }}
            viewport={{ once: true }}
            style={{
              marginBottom: "20px",
              background: "rgba(255,255,255,.05)",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              style={{
                width: "100%",
                padding: "25px",
                border: "none",
                background: "transparent",
                color: "white",
                textAlign: "left",
                cursor: "pointer",
                fontSize: "1.1rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {faq.question}

              <span>
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <div
                style={{
                  padding: "0 25px 25px",
                  color: "#ccc",
                  lineHeight: 1.8,
                }}
              >
                {faq.answer}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;