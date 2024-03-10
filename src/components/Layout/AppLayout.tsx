import React, { Suspense } from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import { appLayout } from "@/components/Layout/Router/router.config";
import ProtectedRoute from "@/components/Layout/Router/ProtectedRoute";
import Footer from "@/components/Layout/Footer";
import { UserHeaderLayout } from "@/components/Layout/Header";

const { Content } = Layout;
const AppLayout = () => {
  return (
    <Layout className="w-full h-full min-h-screen overflow-y-scroll">
      <UserHeaderLayout />
      <Content className="h-full" style={{ minHeight: "unset" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {appLayout.map((route: any, key: any) => {
              const Component = route.component;
              return (
                <Route
                  key={key}
                  path={route.path}
                  element={
                    <ProtectedRoute>
                      <Component />
                    </ProtectedRoute>
                  }
                />
              );
            })}
          </Routes>
        </Suspense>
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
