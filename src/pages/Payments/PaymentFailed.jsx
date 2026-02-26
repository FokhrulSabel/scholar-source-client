import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader/Loader";

const PaymentFailed = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  //State to store scholarship info
  const [scholarshipData, setScholarshipData] = useState({
    scholarshipId: "",
    scholarshipName: "",
    universityName: "",
    amount: 0,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post("/payment-failed-record", data);
      return res.data;
    },
    onSuccess: (data) => {
      setScholarshipData(data.result);
    },
  });
  useEffect(() => {
    if (!user?.email) return;

    const scholarshipId = localStorage.getItem("scholarshipId");
    const scholarshipName = localStorage.getItem("scholarshipName");
    const universityName = localStorage.getItem("universityName");
    const amount = localStorage.getItem("amount");

    if (!scholarshipId || !scholarshipName) return;

    mutate({
      scholarshipId,
      scholarshipName,
      universityName,
      amount,
      userEmail: user.email,
      userName: user.displayName,
    });
  }, [user, mutate]);

  // Show loader if user not loaded yet
  if (loading || isPending) return <Loader />;

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-base-100">
      <div className="max-w-lg w-full bg-base-200 rounded-3xl shadow-xl border border-base-300 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#d19ef1] via-[#8b3fd6] to-[#5a189a]" />

        <div className="p-8 text-center">
          <div className="text-6xl mb-4">❌</div>

          <h2 className="text-3xl font-extrabold text-primary mb-2">
            Payment Failed
          </h2>

          <p className="text-base-content/70 mb-6">
            Your payment was not successful, but your application is saved.
          </p>

          {scholarshipData && (
            <div className="bg-base-100 rounded-2xl p-5 text-left mb-6 border border-base-300">
              <p>
                <span className="font-semibold">Scholarship:</span>{" "}
                {scholarshipData.scholarshipName}
              </p>
              <p>
                <span className="font-semibold">University:</span>{" "}
                {scholarshipData.universityName}
              </p>
              <p>
                <span className="font-semibold">Amount:</span> $
                {scholarshipData.amount}
              </p>
              <p className="font-semibold text-warning mt-2">Status: Unpaid</p>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <Link
              to="/dashboard/my-applications"
              className="py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#d19ef1] via-[#8b3fd6] to-[#5a189a]"
            >
              Go to My Applications
            </Link>

            <Link
              to="/dashboard"
              className="py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
            >
              Return to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
