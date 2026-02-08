import { useForm } from "react-hook-form";
import {
  GraduationCap,
  MapPin,
  Award,
  DollarSign,
  Calendar,
  Mail,
  Sparkles,
  Send,
} from "lucide-react";

const AddScholarship = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
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
    console.log(data);
    await new Promise((res) => setTimeout(res, 1200));
    alert("🎉 Scholarship Created Successfully");
    reset();
  };

  return (
    <div className="min-h-screen bg-yellow-50 py-12 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-yellow-100 text-sm mb-6">
          <Sparkles className="w-4 h-4 text-yellow-600" />
          Create New Opportunity
        </div>

        <h1 className="text-4xl font-bold mb-3">
          Add New <span className="text-yellow-600">Scholarship</span>
        </h1>

        <p className="text-gray-600">
          Help students discover life-changing educational opportunities.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto space-y-6"
      >
        {/* ===== Basic Info ===== */}
        <div className="bg-white rounded-xl p-6 border border-yellow-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-yellow-600" />
            <h2 className="font-semibold text-lg">Basic Information</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="e.g., Global Excellence Award"
              {...register("scholarshipName", { required: true })}
              className="input input-bordered w-full"
            />
            <input
              label="University Name"
              name="universityName"
              placeholder="University Name"
              {...register("universityName", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <input
            type="url"
            placeholder="Image URL"
            {...register("image")}
            className="input input-bordered w-full mt-4"
          />
        </div>

        {/* ===== Location ===== */}
        <div className="bg-white rounded-xl p-6 border border-yellow-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-yellow-600" />
            <h2 className="font-semibold text-lg">Location Details</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              placeholder="Country"
              {...register("country", { required: true })}
              className="input input-bordered"
            />
            <input
              placeholder="City"
              {...register("city")}
              className="input input-bordered"
            />
            <input
              type="number"
              placeholder="World Rank"
              {...register("worldRank")}
              className="input input-bordered"
            />
          </div>
        </div>

        {/* ===== Classification ===== */}
        <div className="bg-white rounded-xl p-6 border border-yellow-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-yellow-600" />
            <h2 className="font-semibold text-lg">Classification</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <select
              {...register("subjectCategory")}
              className="select select-bordered"
            >
              <option>STEM</option>
              <option>Arts & Humanities</option>
              <option>Business & Law</option>
              <option>Social Sciences</option>
            </select>

            <select
              {...register("scholarshipCategory")}
              className="select select-bordered"
            >
              <option>Full Funded</option>
              <option>Partially Funded</option>
              <option>Self Funded</option>
            </select>

            <select {...register("degree")} className="select select-bordered">
              <option>Undergraduate</option>
              <option>Masters</option>
              <option>PhD</option>
            </select>
          </div>
        </div>

        {/* ===== Financial ===== */}
        <div className="bg-white rounded-xl p-6 border border-yellow-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-yellow-600" />
            <h2 className="font-semibold text-lg">Financial Information</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="number"
              placeholder="Tuition Fees"
              {...register("tuitionFees")}
              className="input input-bordered"
            />
            <input
              type="number"
              placeholder="Application Fees"
              {...register("applicationFees")}
              className="input input-bordered"
            />
            <input
              type="number"
              placeholder="Service Charge"
              {...register("serviceCharge")}
              className="input input-bordered"
            />
          </div>
        </div>

        {/* ===== Dates ===== */}
        <div className="bg-white rounded-xl p-6 border border-yellow-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-yellow-600" />
            <h2 className="font-semibold text-lg">Important Dates</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              {...register("deadline", { required: true })}
              className="input input-bordered"
            />
            <input
              type="date"
              {...register("postDate")}
              className="input input-bordered"
            />
          </div>
        </div>

        {/* ===== Contact ===== */}
        <div className="bg-white rounded-xl p-6 border border-yellow-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-yellow-600" />
            <h2 className="font-semibold text-lg">Contact Information</h2>
          </div>

          <input
            type="email"
            placeholder="Your Email"
            {...register("userEmail", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* ===== Submit ===== */}
        <div className="flex justify-center pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-10 py-4 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-white font-semibold flex items-center gap-2 transition"
          >
            {isSubmitting ? (
              "Creating..."
            ) : (
              <>
                <Send className="w-5 h-5" />
                Create Scholarship
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddScholarship;
