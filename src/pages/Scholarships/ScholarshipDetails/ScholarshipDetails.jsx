import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import useAxios from "../../../hooks/useAxios";
import Loader from "../../../components/Loader/Loader";
import {
  FaAward,
  FaCalendarAlt,
  FaGlobe,
  FaMoneyBillWave,
  FaUniversity,
} from "react-icons/fa";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";

const ScholarshipDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to login if not authenticated
  const handleApply = () => {
    if (!user) {
      navigate("/login", {
        state: { from: location },
      });
      return;
    }

    navigate(`/payment/${_id}`);
  };

  // Scholarship fetching
  const { data: scholarship = [], isLoading: scholarshipLoading } = useQuery({
    queryKey: ["singleScholarship", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/scholarships/${id}`);
      return res.data;
    },
  });

  // Review fetching
  const { data: reviews = [], isLoading: reviewLoading } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/reviews/${id}`);
      return res.data;
    },
  });

  const {
    _id,
    scholarshipName,
    universityName,
    universityImage,
    universityCountry,
    universityCity,
    universityWorldRank,
    subjectCategory,
    scholarshipCategory,
    degree,
    tuitionFees,
    applicationFees,
    serviceCharge,
    applicationDeadline,
    scholarshipPostDate,
  } = scholarship;

  if (scholarshipLoading || reviewLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-base-100 py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d19ef1]/10 via-transparent to-[#5a189a]/10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-base-200 rounded-[2.5rem] shadow-xl border border-base-300 overflow-hidden"
        >
          {/* Gradient Top Border */}
          <div className="h-2 w-full bg-gradient-to-r from-[#d19ef1] via-[#8b3fd6] to-[#5a189a]" />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-[400px] lg:h-auto overflow-hidden">
              <img
                src={universityImage}
                className="w-full h-full object-cover"
                alt="University"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 lg:hidden">
                <span className="badge bg-[#8b3fd6] text-white font-bold p-4 border-none">
                  World Rank: #{universityWorldRank}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="px-4 py-1.5 rounded-full bg-[#8b3fd6]/10 text-[#8b3fd6] text-xs font-bold uppercase tracking-widest">
                  {scholarshipCategory}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-[#5a189a]/10 text-[#5a189a] text-xs font-bold uppercase tracking-widest">
                  {degree}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black text-base-content leading-tight mb-8">
                {scholarshipName}
              </h1>

              {/* University Info */}
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-base-300 flex items-center justify-center group-hover:bg-[#8b3fd6]/20 transition-colors">
                    <FaUniversity className="text-[#8b3fd6]" />
                  </div>
                  <div>
                    <p className="text-sm text-base-content/50">Institution</p>
                    <p className="text-lg font-bold text-base-content">
                      {universityName}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-base-300 flex items-center justify-center group-hover:bg-[#5a189a]/20 transition-colors">
                    <FaGlobe className="text-[#5a189a]" />
                  </div>
                  <div>
                    <p className="text-sm text-base-content/50">Location</p>
                    <p className="text-lg font-bold text-base-content">
                      {universityCity}, {universityCountry}
                    </p>
                  </div>
                </div>
              </div>

              {/* Deadline + CTA */}
              <div className="flex items-center justify-between p-6 bg-base-100 rounded-3xl border border-base-300">
                <div>
                  <p className="text-xs font-bold text-[#8b3fd6] uppercase mb-1 flex items-center gap-2">
                    <FaCalendarAlt /> Deadline
                  </p>
                  <p className="text-xl font-black text-base-content">
                    {applicationDeadline}
                  </p>
                </div>

                <button
                  onClick={handleApply}
                  className="btn btn-lg rounded-2xl px-10 text-white border-none 
                  bg-gradient-to-r from-[#d19ef1] via-[#8b3fd6] to-[#5a189a]
                  shadow-lg shadow-[#8b3fd6]/30 hover:scale-105 hover:opacity-90 transition-all duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              label: "Subject",
              value: subjectCategory,
              icon: <FaAward />,
            },
            {
              label: "Posted",
              value: scholarshipPostDate,
              icon: <FaCalendarAlt />,
            },
            {
              label: "Tuition",
              value: `$${tuitionFees}`,
              icon: <FaMoneyBillWave />,
            },
            {
              label: "Service",
              value: `$${serviceCharge}`,
              icon: <FaMoneyBillWave />,
            },
          ].map((item, i) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={i}
              className="bg-base-200 p-6 rounded-[2rem] shadow-lg border border-base-300 text-center hover:shadow-[#8b3fd6]/20 transition-all duration-300"
            >
              <div className="mx-auto w-12 h-12 rounded-2xl bg-base-300 flex items-center justify-center text-xl mb-3 text-[#8b3fd6]">
                {item.icon}
              </div>

              <p className="text-xs font-bold text-base-content/40 uppercase tracking-tighter">
                {item.label}
              </p>
              <p className="text-lg font-black text-base-content truncate">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-3xl font-black text-base-content tracking-tight">
              Student Feedback
            </h2>
            <div className="h-1 flex-1 mx-6 bg-gradient-to-r from-[#8b3fd6]/30 to-transparent rounded-full hidden md:block" />
            <button className="btn btn-ghost btn-sm text-[#8b3fd6]">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <motion.div
                key={review._id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-base-200 p-8 rounded-[2.5rem] shadow-lg border border-base-300 hover:shadow-[#8b3fd6]/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="avatar">
                    <div className="w-14 rounded-2xl ring-2 ring-[#8b3fd6] ring-offset-base-200 ring-offset-2">
                      <img src={review.userImage} alt={review.userName} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-base-content">
                      {review.userName}
                    </h4>
                    <p className="text-xs text-base-content/50 uppercase font-bold tracking-widest">
                      {new Date(review.reviewDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <p className="text-base-content/70 italic leading-relaxed mb-6">
                  "{review.comment}"
                </p>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < review.rating ? "text-[#8b3fd6]" : "text-base-300"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
