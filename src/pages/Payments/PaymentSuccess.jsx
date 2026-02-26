import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../components/Loader/Loader";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    if (!sessionId) return;

    axiosSecure
      .get(`/payment-verify?session_id=${sessionId}`)
      .then((res) => {
        setPaymentData(res.data?.applicationData);
      })
      .catch((err) => console.log(err.response.data));
  }, [sessionId, axiosSecure]);

  if (!paymentData) {
    return <Loader />;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-base-100">
      <div className="max-w-md w-full bg-base-200 rounded-3xl shadow-xl border border-base-300 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#d19ef1] via-[#8b3fd6] to-[#5a189a]" />

        <div className="p-8 text-center">
          <div className="text-5xl mb-4 text-primary">🎉</div>

          <h2 className="text-2xl font-extrabold text-base-content mb-4">
            Payment Successful!
          </h2>

          <div className="space-y-2 text-base-content/80">
            <p>
              <span className="font-semibold">Scholarship:</span>{" "}
              {paymentData.scholarshipName}
            </p>
            <p>
              <span className="font-semibold">University:</span>{" "}
              {paymentData.universityName}
            </p>
            <p>
              <span className="font-semibold">Amount Paid:</span> $
              {paymentData.amount}
            </p>
            <p>
              <span className="font-semibold">Transaction ID:</span>{" "}
              {paymentData.transactionId}
            </p>
          </div>

          <Link
            to="/dashboard/my-applications"
            className="mt-6 inline-block w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#d19ef1] via-[#8b3fd6] to-[#5a189a] hover:opacity-90 transition"
          >
            Go to My Applications
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
