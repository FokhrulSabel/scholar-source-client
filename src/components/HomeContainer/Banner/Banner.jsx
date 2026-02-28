import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Search } from "lucide-react";
import harvard from "../../../assets/harvard.webp";
import oxford from "../../../assets/oxford.webp";
import stanford from "../../../assets/stanford.webp";

const typingWords = ["Future", "Excellence", "Opportunity", "Success"];

const Banner = () => {
  const images = [harvard, oxford, stanford];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    const speed = isDeleting ? 50 : 110;

    const timer = setTimeout(() => {
      setText(
        isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1),
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typingWords.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 1.05]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden text-white  rounded-3xl p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{ scale }}
          className="absolute inset-0 -z-20"
        >
          <img
            src={images[currentImage]}
            alt="Campus"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      

      {/* Academic  Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#d19ef1]/80 via-[#8b3fd6]/70 to-[#5a189a]/80 -z-10"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Pursue Academic <span className="text-primary">{text}</span>
            <span className="animate-pulse">|</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed">
            Access prestigious scholarship opportunities from leading
            universities worldwide. Build your future with confidence, clarity,
            and institutional trust.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/all-scholarships"
              className="px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Search Scholarship
              <Search size={18} />
            </Link>

            <Link
              to="/about"
              className="px-8 py-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE PREMIUM GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-6">
              Featured Scholarships 2026
            </h3>

            <div className="space-y-4 text-sm">
              <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                <div className="flex justify-between">
                  <h4>Global Academic Excellence</h4>
                  <span className="text-primary font-semibold">$80K</span>
                </div>
                <p className="text-gray-300">Deadline: June 2026</p>
              </div>

              <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                <div className="flex justify-between">
                  <h4>International Research Grant</h4>
                  <span className="text-secondary font-semibold">
                    Full Tuition
                  </span>
                </div>
                <p className="text-gray-300">Deadline: April 2026</p>
              </div>

              <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                <div className="flex justify-between">
                  <h4>Merit Leadership Award</h4>
                  <span className="text-accent font-semibold">$70K</span>
                </div>
                <p className="text-gray-300">Deadline: March 2026</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
