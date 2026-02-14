import axios from "axios";
import { useEffect, useState } from "react";
import { FaQuestionCircle, FaLifeRing } from "react-icons/fa";
import { motion } from "framer-motion";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await axios.get("/faq.json");
        setFaqs(res.data || []);
      } catch (error) {
        console.error("Failed to load FAQs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-base-100 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <FaQuestionCircle className="text-sm" />
            Advanced Knowledge Base
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-base-content tracking-tight mb-6">
            Scholarship Platform <span className="text-primary">FAQs</span>
          </h2>

          <p className="text-base-content/60 font-medium max-w-lg mx-auto leading-relaxed">
            Detailed answers to help you understand application processes,
            payments, eligibility, and platform workflows.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {loading && (
            <div className="flex flex-col items-center py-20 gap-4">
              <span className="loading loading-spinner loading-lg text-primary"></span>
              <p className="text-xs font-semibold text-base-content/40 uppercase tracking-widest">
                Loading Knowledge Base
              </p>
            </div>
          )}

          {error && (
            <div className="text-center py-16 text-error font-semibold">
              {error}
            </div>
          )}

          {!loading && !error && faqs.length === 0 && (
            <div className="text-center py-16 text-base-content/50">
              No FAQs available at the moment.
            </div>
          )}

          {!loading &&
            !error &&
            faqs.map((faq, index) => (
              <motion.div
                key={faq.id || index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 ${
                    activeIndex === index
                      ? "border-primary/40 shadow-md"
                      : "border-base-200 hover:border-primary/30"
                  }`}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center gap-4 text-left text-lg font-semibold text-base-content py-6 px-6"
                  >
                    <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </button>

                  {/* Answer */}
                  {activeIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6" />
                      <p className="text-base-content/60 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl">
              <FaLifeRing />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-base-content mb-1">
                Need Expert Assistance?
              </h4>
              <p className="text-base-content/60">
                Our scholarship specialists are available to support your
                application journey.
              </p>
            </div>
          </div>

          <button className="btn btn-primary btn-lg rounded-2xl px-10 font-bold shadow-lg shadow-primary/30">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
