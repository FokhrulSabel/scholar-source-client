import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const CARD_PER_VIEW = 3;
const AUTO_SLIDE_TIME = 6000;

const SuccessStories = () => {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios("../success.json").then((res) => setStories(res.data));
  }, []);

  // Total pages
  const totalPages = Math.ceil(stories.length / CARD_PER_VIEW);

  // Auto Slide
  useEffect(() => {
    if (!stories.length) return;

    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, AUTO_SLIDE_TIME);

    return () => clearInterval(interval);
  }, [stories, totalPages]);

  const currentStories = stories.slice(
    page * CARD_PER_VIEW,
    page * CARD_PER_VIEW + CARD_PER_VIEW,
  );

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            <span className="text-primary">Success</span> Stories
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Inspiring stories from scholarship achievers worldwide.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentStories.map((story, index) => (
                <motion.div
                  key={story.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="relative bg-white/30 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-8 text-primary/20">
                    <FaQuoteLeft size={40} />
                  </div>

                  {/* Profile */}
                  <div className="flex flex-col items-center">
                    <div className="relative p-1 rounded-full bg-gradient-to-tr from-primary to-secondary mb-4">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                      />
                    </div>

                    <h3 className="font-bold text-xl text-gray-900">
                      {story.name}
                    </h3>
                    <p className="text-xs font-medium text-primary uppercase tracking-wider mb-4">
                      {story.university}
                    </p>
                  </div>

                  {/* Message */}
                  <p className="text-gray-800 text-center italic leading-relaxed line-clamp-4 mt-2">
                    "{story.message}"
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center mt-6 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
