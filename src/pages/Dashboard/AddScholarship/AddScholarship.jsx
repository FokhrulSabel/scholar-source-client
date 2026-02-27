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
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const scholarshipData = {
        ...data,
        universityWorldRank: Number(data.universityWorldRank),
        tuitionFees: Number(data.tuitionFees),
        applicationFees: Number(data.applicationFees),
        serviceCharge: Number(data.serviceCharge),
        postedUserEmail: user?.email,
      };

      const res = await axiosSecure.post("/scholarships", scholarshipData);

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Scholarship Added Successfully",
        });

        reset();
      }
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  const input = "input input-bordered w-full rounded-xl bg-base-100";

  const select = "select select-bordered w-full rounded-xl";

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-10">
        <GraduationCap size={40} className="mx-auto mb-3 text-primary" />
        <h2 className="text-4xl font-bold">Add Scholarship</h2>
        <p className="text-gray-500">
          Publish scholarship opportunities worldwide
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-100 shadow-xl rounded-3xl p-10 space-y-12"
      >
        {/* ================= Scholarship Info ================= */}
        <section>
          <h3 className="font-semibold text-xl mb-6">
            Scholarship Information
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Scholarship Name"
              className={input}
              {...register("scholarshipName", {
                required: true,
              })}
            />

            <select className={select} {...register("scholarshipCategory")}>
              <option>Full Funded</option>
              <option>Partial Funded</option>
              <option>Self Funded</option>
            </select>
          </div>
        </section>

        {/* ================= University ================= */}
        <section>
          <h3 className="font-semibold text-xl mb-6">University Information</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <input
              placeholder="University Name"
              className={input}
              {...register("universityName", {
                required: true,
              })}
            />

            <input
              placeholder="Country"
              className={input}
              {...register("universityCountry")}
            />

            <input
              placeholder="City"
              className={input}
              {...register("universityCity")}
            />

            <input
              type="number"
              placeholder="World Rank"
              className={input}
              {...register("universityWorldRank")}
            />

            <input
              placeholder="University Image URL"
              className="md:col-span-2 input input-bordered w-full rounded-xl"
              {...register("universityImage")}
            />
          </div>
        </section>

        {/* ================= Academic ================= */}
        <section>
          <h3 className="font-semibold text-xl mb-6">Academic Details</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <select className={select} {...register("degree")}>
              <option>Undergraduate</option>
              <option>Masters</option>
              <option>PhD</option>
            </select>

            <select className={select} {...register("subjectCategory")}>
              <option>STEM</option>
              <option>Business</option>
              <option>Arts</option>
              <option>Medical</option>
            </select>
          </div>
        </section>

        {/* ================= Financial ================= */}
        <section>
          <h3 className="font-semibold text-xl mb-6">Financial Information</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <input
              type="number"
              placeholder="Tuition Fees"
              className={input}
              {...register("tuitionFees")}
            />

            <input
              type="number"
              placeholder="Application Fees"
              className={input}
              {...register("applicationFees")}
            />

            <input
              type="number"
              placeholder="Service Charge"
              className={input}
              {...register("serviceCharge")}
            />
          </div>
        </section>

        {/* ================= Deadline ================= */}
        <section>
          <h3 className="font-semibold text-xl mb-6">Application Deadline</h3>

          <input
            type="date"
            className={input}
            {...register("applicationDeadline", {
              required: true,
            })}
          />
        </section>

        {/* Submit */}
        <div className="text-center">
          <button className="btn btn-primary px-10 rounded-xl text-lg">
            Publish Scholarship
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddScholarship;
