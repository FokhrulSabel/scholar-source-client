import { motion } from "framer-motion";
import { FaUserGraduate, FaUniversity, FaGlobe, FaAward } from "react-icons/fa";

const statsData = [
  {
    id: 1,
    title: "Students Supported",
    value: "12,000+",
    desc: "Empowered students advancing their academic careers worldwide.",
    icon: FaUserGraduate,
  },
  {
    id: 2,
    title: "Verified Scholarships",
    value: "850+",
    desc: "Carefully curated and authenticated funding opportunities.",
    icon: FaUniversity,
  },
  {
    id: 3,
    title: "Financial Aid Distributed",
    value: "$5M+",
    desc: "Scholarship funding successfully awarded to global talent.",
    icon: FaAward,
  },
  {
    id: 4,
    title: "Countries Reached",
    value: "25+",
    desc: "Connecting students and institutions across continents.",
    icon: FaGlobe,
  },
];

const Statistics = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#f4e9ff] via-white to-[#ede1ff]">
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8b3fd6]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5a189a]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                       bg-[#8b3fd6]/10 border border-[#8b3fd6]/20 
                       text-[#5a189a] text-xs font-semibold uppercase tracking-widest mb-6"
          >
            Institutional Impact
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Academic Excellence in{" "}
            <span className="bg-gradient-to-r from-[#8b3fd6] to-[#5a189a] bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Delivering measurable impact through scholarship accessibility,
            global reach, and trusted institutional partnerships.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/60 backdrop-blur-xl 
                           border border-white/40 rounded-3xl p-10 
                           shadow-lg hover:shadow-2xl 
                           transition-all duration-500"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center 
                                bg-gradient-to-br from-[#8b3fd6]/20 to-[#5a189a]/20 
                                text-[#5a189a] text-3xl mb-8 
                                group-hover:scale-110 transition-transform duration-500"
                >
                  <Icon />
                </div>

                {/* Value */}
                <h3 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
                  {stat.value}
                </h3>

                {/* Title */}
                <p className="text-lg font-semibold text-gray-800 group-hover:text-[#5a189a] transition-colors">
                  {stat.title}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {stat.desc}
                </p>

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 
                                w-0 h-[3px] bg-gradient-to-r from-[#8b3fd6] to-[#5a189a] 
                                rounded-full group-hover:w-1/2 transition-all duration-500"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
