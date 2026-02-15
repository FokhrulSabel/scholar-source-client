import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaTrashAlt, FaStar } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/Loader/Loader";

const AllReviews = () => {
  const axiosSecure = useAxiosSecure();
  const [deletingId, setDeletingId] = useState(null);

  const {
    data: reviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-reviews");
      return res.data?.reviews || [];
    },
  });

  if (isLoading) return <Loader />;

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete Review?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8b3fd6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    });

    if (!confirm.isConfirmed) return;

    try {
      setDeletingId(id);
      const res = await axiosSecure.delete(`/my-reviews/${id}`);

      if (res.data.success) {
        refetch();
        Swal.fire({
          title: "Review Removed",
          text: "The review has been successfully deleted.",
          icon: "success",
          confirmButtonColor: "#8b3fd6",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-base-content">
          Review Management
        </h2>
        <p className="text-base-content/60 mt-1">
          Monitor and manage all scholarship reviews submitted by users.
        </p>
      </div>

      {/* Card Container */}
      <div className="bg-base-100 border border-primary/10 rounded-3xl p-6 shadow-sm">
        {reviews.length === 0 ? (
          <div className="py-20 text-center text-base-content/50">
            No reviews available at the moment.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-base-content/50 uppercase text-xs tracking-wider border-b border-base-200">
                  <th className="py-4">#</th>
                  <th>Scholarship</th>
                  <th>University</th>
                  <th>Review</th>
                  <th>Rating</th>
                  <th>Date</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>

              <tbody>
                {reviews.map((review, index) => (
                  <tr
                    key={review._id}
                    className="border-b border-base-200 hover:bg-primary/5 transition-colors"
                  >
                    <td className="py-4 font-medium text-base-content/60">
                      {index + 1}
                    </td>

                    <td className="font-semibold text-base-content">
                      {review.scholarshipName || "N/A"}
                    </td>

                    <td className="text-base-content/70">
                      {review.universityName}
                    </td>

                    <td className="max-w-xs truncate text-base-content/60">
                      {review.comment}
                    </td>

                    <td>
                      <div className="flex items-center gap-1 text-primary font-semibold">
                        {review.rating}
                        <FaStar className="text-xs" />
                      </div>
                    </td>

                    <td className="text-base-content/50">
                      {new Date(review.reviewDate).toLocaleDateString()}
                    </td>

                    <td className="text-right">
                      <button
                        onClick={() => handleDelete(review._id)}
                        disabled={deletingId === review._id}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition-all disabled:opacity-50"
                      >
                        <FaTrashAlt className="text-xs" />
                        {deletingId === review._id ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReviews;
