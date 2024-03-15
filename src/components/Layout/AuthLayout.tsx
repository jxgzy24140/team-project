import React, { Suspense } from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Route, Routes } from "react-router-dom";
import { authLayouts } from "./Router/router.config";
import Footer from "@/components/Layout/Footer";
import { UserHeaderLayout } from "@/components/Layout/Header";
import { ToastContainer } from "react-toastify";

const UserLayout = () => {
  return (
    <Layout className="w-full h-full min-h-screen overflow-y-scroll">
      <UserHeaderLayout />
      <Content className="">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {Object.keys(authLayouts).map((key: any) => {
              const Component = authLayouts[key].component;
              return (
                <Route
                  key={key}
                  path={authLayouts[key].path}
                  element={<Component />}
                />
              );
            })}
          </Routes>
        </Suspense>
        <ToastContainer />
      </Content>
      <Footer />
    </Layout>
  );
};

export default UserLayout;
