import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaUserPlus, FaFileAlt, FaChartLine } from "react-icons/fa";
import { Link } from "react-router";

const steps = [
  {
    id: 1,
    title: "Discover Opportunities",
    desc: "Search verified scholarships tailored to your academic goals and profile.",
    Icon: FaSearch,
  },
  {
    id: 2,
    title: "Build Your Profile",
    desc: "Create a complete student profile to receive smart recommendations.",
    Icon: FaUserPlus,
  },
  {
    id: 3,
    title: "Submit Applications",
    desc: "Apply securely through our streamlined application system.",
    Icon: FaFileAlt,
  },
  {
    id: 4,
    title: "Track Progress",
    desc: "Monitor application status and updates in real-time from your dashboard.",
    Icon: FaChartLine,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HowItWorks = () => {
  return (
    <section id="apply" className="py-24 bg-base-100 relative overflow-hidden">
      {/* Decorative Glow (Matches Banner Gradient Theme) */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-base-content tracking-tight mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-base-content/60 text-lg font-medium">
            A simple and guided process designed to help you secure the right
            scholarship effortlessly.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-primary/20 z-0" />

          {steps.map((step) => {
            const Icon = step.Icon;

            return (
              <motion.div
                key={step.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="relative text-center group"
              >
                {/* Icon */}
                <div className="relative mb-8 flex justify-center">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary text-3xl shadow-lg shadow-primary/10 group-hover:scale-110 transition-all duration-500">
                    <Icon />
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-base-content mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-base-content/60 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/dashboard"
            className="btn btn-primary btn-lg rounded-2xl px-12 font-bold shadow-xl shadow-primary/30"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
