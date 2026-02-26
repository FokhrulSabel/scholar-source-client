import axios from "axios";
import { useEffect, useRef } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  const interceptorAdded = useRef(false);

  useEffect(() => {
    if (interceptorAdded.current) return;

    interceptorAdded.current = true;

    /* ======================
       REQUEST INTERCEPTOR
    ======================= */
    axiosSecure.interceptors.request.use(
      async (config) => {
        try {
          if (user) {
            const token = await user.getIdToken();

            config.headers.Authorization = `Bearer ${token}`;
          }
        } catch (err) {
          console.error("Token fetch error", err);
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    /* ======================
       RESPONSE INTERCEPTOR
    ======================= */
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response?.status;

        if ((status === 401 || status === 403) && user) {
          await signOutUser();
          navigate("/login");
        }

        return Promise.reject(error);
      },
    );
  }, [user, signOutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
