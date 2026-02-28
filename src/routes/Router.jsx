import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";

import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ModeratorRoute from "./ModeratorRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const Home = lazy(() => import("../pages/Home/Home"));
const AllScholarships = lazy(
  () => import("../pages/Scholarships/AllScholarships/AllScholarships"),
);
const ScholarshipDetails = lazy(
  () => import("../pages/Scholarships/ScholarshipDetails/ScholarshipDetails"),
);
const Payment = lazy(() => import("../pages/Payments/Payment"));
const PaymentSuccess = lazy(() => import("../pages/Payments/PaymentSuccess"));
const PaymentFailed = lazy(() => import("../pages/Payments/PaymentFailed"));

const Login = lazy(() => import("../pages/Auth/Login/Login"));
const Register = lazy(() => import("../pages/Auth/Register/Register"));

const DashboardHome = lazy(
  () => import("../pages/Dashboard/DashboardHome/DashboardHome"),
);
const MyProfile = lazy(() => import("../pages/Dashboard/MyProfile/MyProfile"));
const AddScholarship = lazy(
  () => import("../pages/Dashboard/AddScholarship/AddScholarship"),
);
const EditScholarship = lazy(
  () => import("../pages/Dashboard/EditScholarship/EditScholarship"),
);
const ManageScholarships = lazy(
  () => import("../pages/Dashboard/ManageScholarships/ManageScholarships"),
);
const ManageUsers = lazy(
  () => import("../pages/Dashboard/ManageUsers/ManageUsers"),
);
const DataAnalytics = lazy(
  () => import("../pages/Dashboard/DataAnalytics/DataAnalytics"),
);
const ManageApplications = lazy(
  () => import("../pages/Dashboard/ManageApplications/ManageApplications"),
);
const AllReviews = lazy(
  () => import("../pages/Dashboard/AllReviews/AllReviews"),
);
const MyApplications = lazy(
  () => import("../pages/Dashboard/MyApplications/MyApplications"),
);
const MyReviews = lazy(() => import("../pages/Dashboard/MyReviews/MyReviews"));

const router = createBrowserRouter([
  // MAIN PUBLIC ROUTES

  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "all-scholarships", Component: AllScholarships },
      { path: "scholarships/:id", Component: ScholarshipDetails },
      {
        path: "payment/:id",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-success",
        element: (
          <PrivateRoute>
            <PaymentSuccess></PaymentSuccess>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-failed",
        element: (
          <PrivateRoute>
            <PaymentFailed></PaymentFailed>
          </PrivateRoute>
        ),
      },
    ],
  },

  // AUTH ROUTES

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },

  // DASHBOARD ROUTES

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, Component: DashboardHome },

      { path: "my-profile", Component: MyProfile },

      // ADMIN

      {
        path: "add-scholarship",
        element: (
          <AdminRoute>
            <AddScholarship />
          </AdminRoute>
        ),
      },
      {
        path: "edit-scholarship/:id",
        element: (
          <AdminRoute>
            <EditScholarship />
          </AdminRoute>
        ),
      },
      {
        path: "manage-scholarship",
        element: (
          <AdminRoute>
            <ManageScholarships />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "data-analytics",
        element: (
          <AdminRoute>
            <DataAnalytics />
          </AdminRoute>
        ),
      },

      // MODERATOR

      {
        path: "manage-applications",
        element: (
          <ModeratorRoute>
            <ManageApplications />
          </ModeratorRoute>
        ),
      },
      {
        path: "all-reviews",
        element: (
          <ModeratorRoute>
            <AllReviews />
          </ModeratorRoute>
        ),
      },

      // STUDENT

      { path: "my-applications", Component: MyApplications },
      { path: "my-reviews", Component: MyReviews },
    ],
  },
]);

export default router;
