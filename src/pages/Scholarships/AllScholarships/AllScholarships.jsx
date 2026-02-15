import React, { useEffect, useState } from "react";
import ScholarshipCard from "../../../components/ui/ScholarshipCard/ScholarshipCard";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader/Loader";
import { motion } from "framer-motion";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";

const AllScholarships = () => {
  const axiosInstance = useAxios();

  // Filters & Pagination
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [country, setCountry] = useState("");
  const [subject, setSubject] = useState("");
  const [degree, setDegree] = useState("");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
  const limit = 6;

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  // Fetch Scholarships
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: [
      "scholarships",
      debouncedSearch,
      country,
      subject,
      degree,
      sort,
      page,
    ],
    queryFn: async () => {
      const params = new URLSearchParams({
        search: debouncedSearch,
        country,
        category: subject,
        degree,
        sort,
        limit,
        page,
      });

      const res = await axiosInstance.get(`/all-scholarships?${params}`);
      return res.data;
    },
    keepPreviousData: true,
    staleTime: 1000 * 60, // cache 1 min
  });

  const scholarships = data?.scholarships || [];
  const totalPages = data?.totalPages || 1;

  const resetFilters = () => {
    setSearch("");
    setCountry("");
    setSubject("");
    setDegree("");
    setSort("latest");
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-gray-900">
            Explore Scholarships
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Discover global opportunities tailored to your academic goals.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10 shadow-sm">
          <div className="grid md:grid-cols-6 gap-4">
            {/* Search */}
            <div className="relative md:col-span-2">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search scholarships..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            {/* Subject */}
            {/* <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gray-900"
            >
              <option value="">All Subjects</option>
              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
              <option value="Computer Science">Computer Science</option>
              <option value="Data Science">Data Science</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Software Engineering">Software Engineering</option>
            </select> */}

            {/* Degree */}
            <select
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gray-900"
            >
              <option value="">All Degrees</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Masters">Masters</option>
              <option value="PhD">PhD</option>
            </select>

            {/* Country */}
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gray-900"
            >
              <option value="">All Countries</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Japan">Japan</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="Singapore">Singapore</option>
            </select>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gray-900"
            >
              <option value="latest">Latest</option>
              <option value="deadline">Deadline</option>
              <option value="amount_high">Application Fees: High → Low</option>
              <option value="amount_low">Application Fees: Low → High</option>
            </select>
          </div>

          {/* Reset */}
          <div className="mt-4 text-right">
            <button
              onClick={resetFilters}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Error / Loading */}
        {error && (
          <div className="text-center text-red-500 py-10">
            Something went wrong: {error.message || "Failed to fetch data."}
          </div>
        )}

        {isLoading || isFetching ? (
          <Loader />
        ) : scholarships.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-800">
              No Results Found
            </h2>
            <p className="text-gray-500 mt-3">
              Try adjusting your search criteria or reset filters.
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 bg-gray-900 text-white px-6 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            {/* Scholarships Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {scholarships.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <ScholarshipCard item={item} />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-3 py-2 rounded-lg border border-gray-200 text-sm disabled:opacity-40 hover:bg-gray-100"
              >
                <GrPrevious />
              </button>

              {[...Array(totalPages).keys()].map((num) => (
                <button
                  key={num}
                  onClick={() => setPage(num + 1)}
                  className={`px-4 py-2 rounded-lg text-sm border ${
                    page === num + 1
                      ? "bg-gray-900 text-white border-gray-900"
                      : "border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {num + 1}
                </button>
              ))}

              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-3 py-2 rounded-lg border border-gray-200 text-sm disabled:opacity-40 hover:bg-gray-100"
              >
                <GrNext />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllScholarships;
