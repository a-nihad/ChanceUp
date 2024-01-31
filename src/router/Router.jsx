import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Records from "../pages/Records";
import Installments from "../pages/Installments";
import Settings from "../pages/Settings";
import Accounts from "../pages/Accounts";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../ui/AppLayout";

function Router() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="records" element={<Records />} />
        <Route path="installments" element={<Installments />} />
        <Route path="settings" element={<Settings />} />
        <Route path="accounts" element={<Accounts />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
