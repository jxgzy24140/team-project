import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "@/components/Layout/UserLayout";
import AppLayout from "@/components/Layout/AppLayout";
import AdminDashboardLayout from "@/components/Layout/AdminDashboardLayout";
const Router = () => {
  return (
    <Routes>
      <Route path="/account/*" element={<UserLayout />} />
      <Route path="/*" element={<AppLayout />} />
      <Route path="/admin/*" element={<AdminDashboardLayout />} />
    </Routes>
  );
};

export default Router;
