import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import AddScholarship from "../pages/Dashboard/AddScholarship/AddScholarship";
import AllScholarships from "../pages/Scholarships/AllScholarships/AllScholarships";
import ManageScholarships from "../pages/Dashboard/ManageScholarships/ManageScholarships";
import EditScholarship from "../pages/Dashboard/EditScholarship/EditScholarship";
import ScholarshipDetails from "../pages/Scholarships/ScholarshipDetails/ScholarshipDetails";
import Payment from "../pages/Payments/Payment";
import PaymentSuccess from "../pages/Payments/PaymentSuccess";
import PaymentFailed from "../pages/Payments/PaymentFailed";
import MyApplications from "../pages/Dashboard/MyApplications/MyApplications";
import MyReviews from "../pages/Dashboard/MyReviews/MyReviews";
import ManageApplications from "../pages/Dashboard/ManageApplications/ManageApplications";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import DataAnalytics from "../pages/Dashboard/DataAnalytics/DataAnalytics";
import AllReviews from "../pages/Dashboard/AllReviews/AllReviews";
import AdminRoute from "./AdminRoute";
import ModeratorRoute from "./ModeratorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-scholarships",
        Component: AllScholarships,
      },
      {
        path: "/scholarships/:id",
        Component: ScholarshipDetails,
      },
      {
        path: "/payment/:id",
        Component: Payment,
      },
      {
        path: "/payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "/payment-failed",
        Component: PaymentFailed,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "my-profile",
        Component: MyProfile,
      },
      {
        path: "add-scholarship",
        element: (
          <AdminRoute>
            <AddScholarship></AddScholarship>
          </AdminRoute>
        ),
      },
      {
        path: "edit-scholarship/:id",
        element: (
          <AdminRoute>
            <EditScholarship></EditScholarship>
          </AdminRoute>
        ),
      },
      {
        path: "manage-scholarship",
        element: (
          <AdminRoute>
            <ManageScholarships></ManageScholarships>
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "data-analytics",
        element: (
          <AdminRoute>
            <DataAnalytics></DataAnalytics>
          </AdminRoute>
        ),
      },

      {
        path: "manage-applications",
        element: (
          <ModeratorRoute>
            <ManageApplications></ManageApplications>
          </ModeratorRoute>
        ),
      },

      {
        path: "all-reviews",
        element: (
          <ModeratorRoute>
            <AllReviews></AllReviews>
          </ModeratorRoute>
        ),
      },

      {
        path: "my-applications",
        Component: MyApplications,
      },
      {
        path: "my-reviews",
        Component: MyReviews,
      },
    ],
  },
]);

export default router;
