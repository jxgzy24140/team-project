import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "@/components/Layout/UserLayout";
import AppLayout from "@/components/Layout/AppLayout";
const Router = () => {
  return (
    <Routes>
      <Route path="/account/*" element={<UserLayout />} />
      <Route path="/*" element={<AppLayout />} />
    </Routes>
  );
};

export default Router;
