import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { useEffect } from "react";

const EditScholarship = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const { data: scholarship, isSuccess } = useQuery({
    queryKey: ["scholarship", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarships/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (isSuccess) {
      const { _id, ...rest } = scholarship;
      reset(rest);
    }
  }, [scholarship, isSuccess, reset]);

  const onSubmit = async (data) => {
    data.tuitionFees = Number(data.tuitionFees);
    data.applicationFees = Number(data.applicationFees);
    data.serviceCharge = Number(data.serviceCharge);

    const res = await axiosSecure.put(`/scholarships/${id}`, data);

    if (res.data.success) {
      Swal.fire({
        icon: "success",
        title: "Updated Successfully",
        confirmButtonColor: "#8b3fd6",
      });

      navigate("/dashboard/manage-scholarship");
    }
  };

  return (
    <div className="min-h-screen p-8 bg-purple-50">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-[#5a189a] mb-8">
          Edit Scholarship
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 gap-6"
        >
          <input
            {...register("scholarshipName")}
            placeholder="Scholarship Name"
            className="input-style"
          />

          <input
            {...register("universityName")}
            placeholder="University Name"
            className="input-style"
          />

          <input
            {...register("universityImage")}
            placeholder="University Image URL"
            className="input-style md:col-span-2"
          />

          <input
            {...register("universityCountry")}
            placeholder="Country"
            className="input-style"
          />

          <input
            {...register("universityCity")}
            placeholder="City"
            className="input-style"
          />

          <input
            type="number"
            {...register("universityWorldRank")}
            placeholder="World Rank"
            className="input-style"
          />

          <input
            type="number"
            {...register("tuitionFees")}
            placeholder="Tuition Fees"
            className="input-style"
          />

          <input
            type="number"
            {...register("applicationFees")}
            placeholder="Application Fees"
            className="input-style"
          />

          <input
            type="number"
            {...register("serviceCharge")}
            placeholder="Service Charge"
            className="input-style"
          />

          <input
            type="date"
            {...register("applicationDeadline")}
            className="input-style md:col-span-2"
          />

          <button
            className="
            md:col-span-2
            py-4
            rounded-xl
            text-white
            font-semibold
            bg-gradient-to-r
            from-[#d19ef1]
            via-[#8b3fd6]
            to-[#5a189a]
            hover:scale-[1.02]
            transition
          "
          >
            Update Scholarship
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditScholarship;
