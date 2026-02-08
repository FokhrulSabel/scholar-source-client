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
    ],
  },
]);

export default router;
