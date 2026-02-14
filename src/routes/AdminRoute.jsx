import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loader from "../components/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, isLoading } = useRole();

  if (loading || isLoading) {
    return <Loader></Loader>;
  }

  if (role !== "admin") {
    return;
  }
  return children;
};

export default AdminRoute;
