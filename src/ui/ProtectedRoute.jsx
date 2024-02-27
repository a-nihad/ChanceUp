import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../features/authentication/useAdmin";
import Loader from "./Loader";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load authenticated user
  const { isAuthenticated, isLoading } = useAdmin();

  // 2. There is No authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
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

  // 4. If ther is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
