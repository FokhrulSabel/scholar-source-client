import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="relative py-24 px-6 bg-base-200/30 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-3xl opacity-70"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-base-content mb-4">
            Contact <span className="text-primary">ScholarSource</span>
          </h1>

          <p className="text-base-content/70 max-w-xl mx-auto">
            Have questions about scholarships or need assistance? Our team is
            here to help you navigate opportunities and support your academic
            journey.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-base-100 border border-base-300 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition group">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5 group-hover:scale-110 transition">
              <Mail size={22} />
            </div>

            <h3 className="font-semibold text-lg mb-2">Email</h3>

            <p className="text-base-content/60 text-sm mb-3">
              Reach out for support or partnership inquiries.
            </p>

            <p className="font-medium text-primary">
              support@ScholarSource.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-base-100 border border-base-300 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition group">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5 group-hover:scale-110 transition">
              <Phone size={22} />
            </div>

            <h3 className="font-semibold text-lg mb-2">Phone</h3>

            <p className="text-base-content/60 text-sm mb-3">
              Talk directly with our support team.
            </p>

            <p className="font-medium text-primary">+880 1878 566957</p>
          </div>

          {/* Location */}
          <div className="bg-base-100 border border-base-300 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition group">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5 group-hover:scale-110 transition">
              <MapPin size={22} />
            </div>

            <h3 className="font-semibold text-lg mb-2">Location</h3>

            <p className="text-base-content/60 text-sm mb-3">
              Our headquarters location.
            </p>

            <p className="font-medium text-primary">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
