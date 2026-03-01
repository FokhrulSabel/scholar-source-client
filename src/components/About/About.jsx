import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  ShieldCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-base-100 text-base-content overflow-hidden">
      
      <section className="relative py-28 px-6 md:px-16 lg:px-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent -z-10" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto"
        >
          Empowering the Next Generation of{" "}
          <span className="text-primary">Global Scholars</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 max-w-2xl mx-auto text-lg text-base-content/70 leading-relaxed"
        >
          ScholarSource connects ambitious students with verified, high-impact
          scholarship opportunities worldwide — simplifying discovery,
          application, and success.
        </motion.p>
      </section>

      
      <section className="px-6 md:px-16 lg:px-32 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold mb-6">
              Breaking Barriers Through{" "}
              <span className="text-primary">Accessible Education</span>
            </h2>

            <p className="text-base-content/70 leading-relaxed mb-6">
              Education should not be limited by geography or finances.
              ScholarSource was built to create a transparent and powerful
              ecosystem where students can access real, verified funding
              opportunities from top global institutions.
            </p>

            <p className="text-base-content/70 leading-relaxed">
              From fully funded programs to leadership grants and research
              scholarships, we curate opportunities that shape futures.
            </p>

            <div className="flex gap-12 mt-10">
              <div>
                <h4 className="text-3xl font-bold text-primary">15K+</h4>
                <p className="text-sm uppercase tracking-widest text-base-content/40">
                  Students Connected
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary">800+</h4>
                <p className="text-sm uppercase tracking-widest text-base-content/40">
                  Verified Programs
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-[3rem] -z-10" />
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Students collaborating"
              className="rounded-[2.5rem] shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      
      <section className="py-28 bg-base-200/40">
        <div className="px-6 md:px-16 lg:px-32 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
            Our Core <span className="text-primary">Principles</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap size={32} />,
                title: "Student First",
                desc: "Every feature is designed around student success.",
              },
              {
                icon: <Globe2 size={32} />,
                title: "Global Access",
                desc: "Opportunities from Asia, Europe, USA & beyond.",
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Verified Data",
                desc: "Authentic, updated & transparent listings.",
              },
              {
                icon: <Rocket size={32} />,
                title: "Growth Driven",
                desc: "Empowering ambition with real resources.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-base-100 p-10 rounded-3xl border border-base-300 shadow-lg hover:shadow-primary/20 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-base-content/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="px-6 md:px-16 lg:px-32 py-24">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative bg-primary text-white p-16 rounded-[3rem] text-center overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -mr-36 -mt-36 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full -ml-36 -mb-36 blur-3xl" />

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 relative z-10">
            Start Your Academic Journey Today
          </h2>

          <p className="max-w-2xl mx-auto mb-10 text-white/80 relative z-10">
            Join thousands of students who are discovering life-changing
            scholarship opportunities through ScholarSource.
          </p>

          <Link
            to="/all-scholarships"
            className="btn bg-white text-primary border-none px-10 rounded-2xl font-bold hover:bg-base-200"
          >
            Explore Scholarships
            <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;