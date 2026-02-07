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
      {/* Top Filter Bar */}
      <div className="bg-white p-4 my-5 rounded-2xl shadow-md border border-gray-200 flex flex-wrap items-center gap-4">
        <button className="flex items-center gap-2 bg-neutral text-white px-5 py-3 rounded-xl font-semibold shadow-sm">
          <span className="text-lg">⚙️</span> Filter Scholarships
        </button>

        <div className="h-7 w-px bg-gray-300 hidden md:block"></div>

        <input
          type="text"
          placeholder="Search scholarships..."
          className="input input-bordered rounded-xl w-60 shadow-sm"
        />

        <div className="h-7 w-px bg-gray-300 hidden md:block"></div>

        <select className="select select-bordered rounded-xl w-40 shadow-sm">
          <option disabled selected>
            Subject Category
          </option>
          <option>Engineering</option>
          <option>Business</option>
          <option>Computer Science</option>
          <option>Medical</option>
          <option>Arts</option>
        </select>

        <div className="h-7 w-px bg-gray-300 hidden md:block"></div>

        <select className="select select-bordered rounded-xl w-40 shadow-sm">
          <option disabled selected>
            Scholarship Type
          </option>
          <option>Fully Funded</option>
          <option>Partially Funded</option>
          <option>Tuition Waiver</option>
          <option>Fellowship</option>
        </select>

        <div className="h-7 w-px bg-gray-300 hidden md:block"></div>

        <select className="select select-bordered rounded-xl w-40 shadow-sm">
          <option disabled selected>
            Country
          </option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
          <option>Germany</option>
          <option>Australia</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
        {scholarships.map((item, index) => (
          <ScholarshipCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllScholarships;
