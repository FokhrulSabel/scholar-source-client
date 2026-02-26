import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../components/Loader/Loader";

const Payment = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id: scholarshipId } = useParams();

  const { data: scholarship, isLoading } = useQuery({
    queryKey: ["scholarship", scholarshipId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarships/${scholarshipId}`);
      return res.data;
    },
  });
  if (isLoading || loading) {
    return <Loader></Loader>;
  }

  const handlePayment = async () => {
    // Store data for payment failure page
    localStorage.setItem("scholarshipId", scholarship._id);
    localStorage.setItem("scholarshipName", scholarship.scholarshipName);
    localStorage.setItem("universityName", scholarship.universityName);
    localStorage.setItem(
      "amount",
      Number(scholarship.applicationFees) + Number(scholarship.serviceCharge),
    );

    const paymentInfo = {
      amount:
        Number(scholarship.applicationFees) + Number(scholarship.serviceCharge),
      scholarshipId: scholarship._id,
      scholarshipName: scholarship.scholarshipName,
      universityName: scholarship.universityName,
      studentEmail: user.email,
      userName: user.displayName || user.email?.split("@")[0] || "Student",
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);

    window.location.href = res.data.url;
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10 bg-base-100">
      {user ? (
        <div className="max-w-md w-full rounded-3xl bg-base-200 shadow-xl border border-base-300 overflow-hidden">
          {/* Gradient Top */}
          <div className="h-2 w-full bg-gradient-to-r from-[#d19ef1] via-[#8b3fd6] to-[#5a189a]" />

          <div className="p-8">
            <h2 className="text-2xl font-extrabold text-center text-base-content">
              Complete Your Payment
            </h2>

            <p className="text-center text-primary font-semibold mt-2">
              {scholarship.scholarshipName}
            </p>

            <p className="text-center text-sm text-base-content/70 mb-6">
              {scholarship.universityName} — {scholarship.country}
            </p>

            <div className="space-y-3 text-base-content">
              <div className="flex justify-between">
                <span>Application Fee</span>
                <span className="font-semibold">
                  ${scholarship.applicationFees}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Service Charge</span>
                <span className="font-semibold">
                  ${scholarship.serviceCharge}
                </span>
              </div>

              <div className="border-t border-base-300 pt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">
                  ${scholarship.applicationFees + scholarship.serviceCharge}
                </span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="mt-8 w-full py-3 rounded-xl text-white font-bold bg-gradient-to-r from-[#d19ef1] via-[#8b3fd6] to-[#5a189a] hover:opacity-90 transition-all duration-300"
            >
              Pay Now
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-md w-full bg-base-200 rounded-3xl shadow-xl p-8 text-center border border-base-300">
          <h2 className="text-2xl font-black text-base-content">
            Please Login First
          </h2>
          <Link
            to="/auth/login"
            className="mt-5 inline-block w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#d19ef1] via-[#8b3fd6] to-[#5a189a]"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Payment;
