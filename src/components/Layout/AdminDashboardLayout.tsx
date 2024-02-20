import React, { Suspense } from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import { appLayout } from "@/components/Layout/Router/router.config";
import ProtectedRoute from "@/components/Layout/Router/ProtectedRoute";
import { AdminHeaderLayout } from "@/components/Layout/Header";
const { Content } = Layout;
const AdminDashboardLayout = () => {
  return (
    <Layout className="w-full h-full min-h-screen overflow-y-scroll">
      <AdminHeaderLayout />
      <Content className="h-full min-h-full" style={{ minHeight: "unset" }}>
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
    </Layout>
  );
};

export default AdminDashboardLayout;
