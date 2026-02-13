import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router";

const PaymentFailed = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  //State to store scholarship info
  const [scholarshipData, setScholarshipData] = useState({
    scholarshipId: "",
    scholarshipName: "",
    universityName: "",
    amount: 0,
  });
  console.log(scholarshipData);

  useEffect(() => {
    if (!user?.email) return;

    const scholarshipId = localStorage.getItem("scholarshipId");
    const scholarshipName = localStorage.getItem("scholarshipName");
    const universityName = localStorage.getItem("universityName");
    const amount = localStorage.getItem("amount");
    console.log(amount);

    if ((!scholarshipId, scholarshipName)) return;

    // Send to backend
    axiosSecure
      .post("/payment-failed-record", {
        scholarshipId,
        scholarshipName,
        universityName,
        amount,
        userEmail: user.email,
      })
      .then((res) => {
        console.log(res.data.result);
        setScholarshipData(res.data.result);
      });
  }, [user, axiosSecure]);

  if (!user?.email) return <Loader></Loader>;
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl my-16 text-center">
      <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>

      <p className="mt-3 text-gray-700">
        Scholarship: {scholarshipData.scholarshipName}
      </p>
      <p className="text-gray-700">
        University: {scholarshipData.universityName}
      </p>

      <Link
        to="/dashboard/my-applications"
        className="btn btn-primary w-full mt-6"
      >
        Return to Dashboard
      </Link>
    </div>
  );
};

export default PaymentFailed;
