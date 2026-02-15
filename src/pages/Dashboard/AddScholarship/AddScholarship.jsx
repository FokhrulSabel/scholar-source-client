import React from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { GraduationCap } from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddScholarship = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      scholarshipName: "",
      universityName: "",
      universityImage: "",
      universityCountry: "",
      universityCity: "",
      universityWorldRank: 1,
      subjectCategory: "STEM",
      scholarshipCategory: "Full Funded",
      degree: "Undergraduate",
      tuitionFees: 0,
      applicationFees: 0,
      serviceCharge: 0,
      applicationDeadline: "",
      scholarshipPostDate: new Date().toISOString().split("T")[0],
      postedUserEmail: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const submissionData = {
        ...data,
        universityWorldRank: Number(data.universityWorldRank),
        tuitionFees: Number(data.tuitionFees),
        applicationFees: Number(data.applicationFees),
        serviceCharge: Number(data.serviceCharge),
        postedUserEmail: user?.email,
      };

      const res = await axiosSecure.post("/scholarships", submissionData);

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Scholarship Published",
          text: "The scholarship has been successfully added.",
          confirmButtonColor: "#111827",
        });
      }
    } catch (error) {
      console.error("Error creating scholarship:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 md:px-10 py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black text-white shadow-lg mb-4">
          <GraduationCap size={28} />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Add New Scholarship
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Create and publish a new scholarship opportunity for students
          worldwide.
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-8 md:p-14">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-14">
          {/* -------------------- Program Details -------------------- */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-8 border-b pb-3">
              Program Details
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Scholarship Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Scholarship Name
                </label>
                <input
                  type="text"
                  placeholder="Global Excellence Scholarship"
                  className={`w-full h-12 px-4 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none transition ${
                    errors.scholarshipName
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  {...register("scholarshipName", {
                    required: "Scholarship name is required",
                  })}
                />
              </div>

              {/* University Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  University Name
                </label>
                <input
                  type="text"
                  placeholder="Oxford University"
                  className={`w-full h-12 px-4 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none transition ${
                    errors.universityName ? "border-red-500" : "border-gray-200"
                  }`}
                  {...register("universityName", {
                    required: "University name is required",
                  })}
                />
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  University Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none transition"
                  {...register("universityImage")}
                />
              </div>
            </div>
          </section>

          {/* -------------------- Eligibility -------------------- */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-8 border-b pb-3">
              Eligibility & Location
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-black"
                  {...register("universityCountry", { required: true })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Subject Category
                </label>
                <select
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-black"
                  {...register("subjectCategory", { required: true })}
                >
                  <option>STEM</option>
                  <option>Arts & Humanities</option>
                  <option>Business & Law</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Degree Level
                </label>
                <select
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-black"
                  {...register("degree", { required: true })}
                >
                  <option>Undergraduate</option>
                  <option>Master's</option>
                  <option>PhD</option>
                </select>
              </div>
            </div>
          </section>

          {/* -------------------- Financial Details -------------------- */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-8 border-b pb-3">
              Financial Details
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Application Fee
                </label>
                <input
                  type="number"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-black"
                  {...register("applicationFees")}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Service Charge
                </label>
                <input
                  type="number"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-black"
                  {...register("serviceCharge")}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Application Deadline
                </label>
                <input
                  type="date"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-black"
                  {...register("applicationDeadline", { required: true })}
                />
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="px-10 py-4 rounded-2xl bg-black text-white font-semibold text-lg hover:opacity-90 active:scale-95 transition-all shadow-lg"
            >
              Publish Scholarship
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddScholarship;
