import React, { Suspense } from "react";
import { Layout, Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import { Route, Routes } from "react-router-dom";
import { userLayout } from "./Router/router.config";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

const UserLayout = () => {
  return (
    <Layout className="w-full h-full">
      <Header />
      <Content>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {userLayout.map((route: any, key: any) => {
              const Component = route.component;
              return (
                <Route key={key} path={route.path} element={<Component />} />
              );
            })}
          </Routes>
        </Suspense>
      </Content>
      <Footer />
    </Layout>
  );
};

export default UserLayout;
