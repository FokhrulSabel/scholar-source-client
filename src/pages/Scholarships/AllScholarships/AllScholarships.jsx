import React, { useEffect, useState } from "react";
import ScholarshipCard from "../../../components/ui/ScholarshipCard/ScholarshipCard";
import useAxios from "../../../hooks/useAxios";

const AllScholarships = () => {
  const axiosInstance = useAxios();
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get("/scholarships", {
          params: { limit: 6, page: 1 },
        });

        setScholarships(res.data.scholarships || []);
      } catch (error) {
        console.error("Fetch Scholarships Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, [axiosInstance]);

  return (
    <div className="px-4 py-10">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {scholarships.map((item) => (
            <ScholarshipCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllScholarships;
