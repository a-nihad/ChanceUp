import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../features/authentication/useAdmin";
import Loader from "./Loader";
import { toast } from "react-hot-toast";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load authenticated admin
  const { isAuthenticated, isLoading, admin } = useAdmin();

  // 2. There is No authenticated admin, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
      if (admin?.app_metadata?.role !== "super-admin") {
        toast.error("Only admin can access this account");
        navigate("/login");
      }
    },
    [isAuthenticated, isLoading, navigate],
  );

  // 3. While loading, show a loader
  if (isLoading)
    return (
      <div className="h-screen w-screen items-center justify-center ">
        <Loader />
      </div>
    );

  // 4. If ther is a admin, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
