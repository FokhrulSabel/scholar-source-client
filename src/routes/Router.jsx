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
import ScholarshipDetails from "../pages/Scholarships/ScholarShipDetails/ScholarShipDetails";
import Payment from "../pages/Payments/Payment";
import PaymentSuccess from "../pages/Payments/PaymentSuccess";
import PaymentFailed from "../pages/Payments/PaymentFailed";
import MyApplications from "../pages/Dashboard/MyApplications/MyApplications";
import MyReviews from "../pages/Dashboard/MyReviews/MyReviews";
import ManageApplications from "../pages/Dashboard/ManageApplications/ManageApplications";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "my-profile",
        Component: MyProfile,
      },
      {
        path: "add-scholarship",
        Component: AddScholarship,
      },
      {
        path: "manage-scholarship",
        Component: ManageScholarships,
      },
      {
        path: "edit-scholarship/:id",
        Component: EditScholarship,
      },
      {
        path: "my-applications",
        Component: MyApplications,
      },
      {
        path: "my-reviews",
        Component: MyReviews,
      },
      {
        path: "manage-applications",
        Component: ManageApplications,
      },
      {
        path: "manage-users",
        Component: ManageUsers,
      },
    ],
  },
]);

export default router;
