import React, { useEffect, useRef } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader/Loader";
import { Link, useLocation } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { XCircle } from "lucide-react";

const PaymentFailed = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const location = useLocation();
  const hasRecorded = useRef(false);

  // Get values directly (no state needed)
  const scholarshipId = localStorage.getItem("scholarshipId");
  const scholarshipName = localStorage.getItem("scholarshipName");
  const universityName = localStorage.getItem("universityName");
  const amount = localStorage.getItem("amount");

  const params = new URLSearchParams(location.search);
  const errorMessage =
    params.get("error") ||
    "Your payment could not be completed. Please try again.";

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post("/payment-failed-record", data);
      return res.data;
    },
  });

  useEffect(() => {
    if (
      !user?.email ||
      !scholarshipId ||
      !scholarshipName ||
      hasRecorded.current
    )
      return;

    hasRecorded.current = true;

    mutate({
      scholarshipId,
      scholarshipName,
      universityName,
      amount,
      userEmail: user.email,
      userName: user.displayName,
    });
  }, [user, scholarshipId, scholarshipName, universityName, amount, mutate]);

  if (loading || isPending) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-red-100 p-4 rounded-full">
            <XCircle className="w-10 h-10 text-red-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-red-600 mb-3">Payment Failed</h1>

        {/* Scholarship Name */}
        {scholarshipName && (
          <p className="text-gray-700 mb-2">
            Scholarship:{" "}
            <span className="font-semibold">{scholarshipName}</span>
          </p>
        )}

        {/* Error Message */}
        <p className="text-gray-500 text-sm mb-6">{errorMessage}</p>

        {/* Action */}
        <div className="flex flex-col gap-3">
          <Link
            to="/dashboard/my-applications"
            className="btn btn-primary w-full"
          >
            Go to My Applications
          </Link>
          <Link to="/dashboard" className="btn btn-outline w-full">
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
