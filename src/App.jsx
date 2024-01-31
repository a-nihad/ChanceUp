import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Records from "./pages/Records";
import Installments from "./pages/Installments";
import Settings from "./pages/Settings";
import Accounts from "./pages/Accounts";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="records" element={<Records />} />
        <Route path="installments" element={<Installments />} />
        <Route path="settings" element={<Settings />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
