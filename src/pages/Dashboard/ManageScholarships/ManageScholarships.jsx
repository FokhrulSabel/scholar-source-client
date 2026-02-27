import React, { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Loader from "../../../components/Loader/Loader";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";

const ManageScholarships = () => {
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();

  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Scholarships", page],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/scholarships?page=${page}&limit=${limit}`,
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  const scholarships = data?.result || [];
  const totalPages = data?.totalPages || 1;

  // ✅ Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Scholarship?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8b3fd6",
      cancelButtonColor: "#ef4444",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/scholarships/${id}`).then(() => {
          refetch();
          Swal.fire("Deleted!", "", "success");
        });
      }
    });
  };

  if (isLoading) return <Loader />;

  return (
    <div className="space-y-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-[#5a189a]">Manage Scholarships</h2>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border shadow-lg">
        <table className="table">
          <thead className="bg-gradient-to-r from-[#d19ef1] to-[#8b3fd6] text-white">
            <tr>
              <th>#</th>
              <th>University</th>
              <th>Scholarship</th>
              <th>Fees</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {scholarships.map((sch, index) => (
              <tr key={sch._id}>
                <td>{(page - 1) * limit + index + 1}</td>

                <td>
                  <div className="flex items-center gap-3">
                    <img
                      src={sch.universityImage}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <p className="font-semibold">{sch.universityName}</p>
                      <p className="text-sm text-gray-500">
                        {sch.universityCountry}
                      </p>
                    </div>
                  </div>
                </td>

                <td>
                  {sch.scholarshipName}
                  <br />
                  <span className="badge bg-purple-100 text-purple-700">
                    {sch.degree}
                  </span>
                </td>

                <td>
                  Tuition: ${sch.tuitionFees}
                  <br />
                  App: ${sch.applicationFees}
                </td>

                <td>
                  {
                    new Date(sch.applicationDeadline)
                      .toISOString()
                      .split("T")[0]
                  }
                </td>

                <td className="flex gap-2">
                  <Link
                    to={`/dashboard/edit-scholarship/${sch._id}`}
                    className="btn btn-sm bg-[#8b3fd6] text-white"
                  >
                    <FaEdit />
                  </Link>

                  <button
                    onClick={() => handleDelete(sch._id)}
                    className="btn btn-sm btn-error"
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-sm bg-[#d19ef1]"
        >
          Prev
        </button>

        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setPage(num + 1)}
            className={`btn btn-sm ${
              page === num + 1 ? "bg-[#5a189a] text-white" : "bg-[#f3e8ff]"
            }`}
          >
            {num + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="btn btn-sm bg-[#d19ef1]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageScholarships;
