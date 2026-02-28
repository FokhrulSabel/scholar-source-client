import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogIn = async (data) => {
    try {
      const res = await signInUser(data.email, data.password);
      const user = res.user;
      const idToken = await user.getIdToken();

      // console.log("ID Token:", idToken);

      // Optional: store token if you are not using axios interceptor
      // localStorage.setItem("access-token", idToken);

      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const DEMO_USERS = {
    student: {
      email: "student001@gmail.com",
      password: "Student@12345",
    },
    moderator: {
      email: "moderator002@gmail.com",
      password: "Moderator@12345",
    },
    admin: {
      email: "admin003@gmail.com",
      password: "Admin@12345",
    },
  };

  const handleDemoLogin = async (role) => {
    try {
      const demoUser = DEMO_USERS[role];

      const res = await signInUser(demoUser.email, demoUser.password);

      const user = res.user;
      await user.getIdToken();

      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center py-4">
            Log in to your account
          </h2>
          <fieldset className="fieldset">
            <form
              onSubmit={handleSubmit(handleLogIn)}
              className="fieldset relative"
            >
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">The email is required</p>
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
              {/* Error massgae for Password */}
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}

              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must contain at least one uppercase, one lowercase,
                  one number.
                </p>
              )}

              <div>
                <Link className="link link-hover cursor-pointer">
                  Forgot password?
                </Link>
              </div>
              <button type="submit" className="btn btn-neutral mt-4 ">
                Login
              </button>
              <SocialLogin></SocialLogin>

              <p className="text-md font-semibold text-center my-1.5">
                Don't have an account?{" "}
                <Link
                  state={location?.state}
                  className="text-primary"
                  to="/register"
                >
                  Register
                </Link>{" "}
              </p>

              <div className="divider">Demo Access</div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => handleDemoLogin("student")}
                  className="btn btn-outline w-full"
                >
                  Login as Student
                </button>

                <button
                  type="button"
                  onClick={() => handleDemoLogin("moderator")}
                  className="btn btn-outline w-full"
                >
                  Login as Moderator
                </button>

                <button
                  type="button"
                  onClick={() => handleDemoLogin("admin")}
                  className="btn btn-outline w-full"
                >
                  Login as Admin
                </button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>{" "}
    </div>
  );
};

export default Login;
