import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ui/ProtectedRoute";
import Installments from "../pages/Installments";
import PageNotFound from "../pages/PageNotFound";
import Transactions from "../pages/Transactions";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import AppLayout from "../ui/AppLayout";
import Members from "../pages/Members";
import Records from "../pages/Records";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

function Router() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="members" element={<Members />} />
        <Route path="records" element={<Records />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="installments" element={<Installments />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
