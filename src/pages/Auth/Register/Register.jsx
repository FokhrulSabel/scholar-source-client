import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_host_key
    }`;

    const res = await axios.post(url, formData);
    return res.data.data.url;
  };

  // Register the user
  const handleRegistration = async (data) => {
    setLoading(true);

    try {
      // 1️.Validate Image
      if (!data?.photo?.[0]) {
        throw new Error("Profile image is required");
      }

      // 2️.Upload Image First (avoid orphan firebase users)
      const imageURL = await uploadToImgBB(data.photo[0]);

      // 3️.Create Firebase User
      const userCredential = await createUser(data.email, data.password);
      const firebaseUser = userCredential.user;

      // 4️.Update Firebase Profile
      const profile = {
        displayName: data.name,
        photoURL: imageURL,
      };
      await updateUser(profile);

      // 5️.Prepare Database User Info
      const userInfo = {
        displayName: data.name,
        email: data.email,
        photoURL: imageURL,
        role: "student",
        uid: firebaseUser.uid,
        createdAt: new Date(),
      };

      // 6️.Save to Database
      const dbRes = await axiosSecure.post("/users", userInfo);

      if (dbRes?.data?.insertedId || dbRes?.status === 200) {
        toast.success("🎉 Registration successful!");
        navigate(location?.state?.from || "/");
      } else {
        throw new Error("Database save failed");
      }
    } catch (error) {
      console.error("Registration Failed:", error);
      toast.error(error.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center py-4">
            Create account
          </h2>

          <form onSubmit={handleSubmit(handleRegistration)}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500">Name is required</p>}

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}

              {/* Photo */}
              <label className="label">Image</label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input"
              />
              {errors.photo && (
                <p className="text-red-500">Photo is required</p>
              )}

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                })}
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be at least 6 characters.
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must contain uppercase, lowercase, and number.
                </p>
              )}

              <button className="btn btn-neutral mt-4" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
            </fieldset>
          </form>

          <SocialLogin />

          <p className="text-md font-semibold text-center my-1.5">
            Have an account?{" "}
            <Link
              state={location?.state}
              className="text-primary"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
