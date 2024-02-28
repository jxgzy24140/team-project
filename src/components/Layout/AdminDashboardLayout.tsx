import React, { Suspense } from "react";
import { Layout, Row, Col } from "antd";
import { Route, Routes } from "react-router-dom";
import { userLayout } from "./Router/router.config";
import Sidebar from "@/components/Layout/Sidebar";
import { AdminHeaderLayout } from "@/components/Layout/Header";

const { Content } = Layout;
const AdminDashboardLayout = () => {
  return (
    <Layout className="w-full h-screen max-h-screen flex flex-row ">
      <Col span={4}>
        <Sidebar />
      </Col>
      <Col span={20}>
        <Row className="flex-col">
          <Col>
            <AdminHeaderLayout />
          </Col>
          <Col style={{ height: "calc(100vh - 40px)" }}>
            <Content
              className="h-full min-h-full max-h-full"
              style={{ minHeight: "unset" }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  {userLayout.map((route: any, key: any) => {
                    const Component = route.component;
                    return (
                      <Route
                        key={key}
                        path={route.path}
                        element={<Component />}
                      />
                    );
                  })}
                </Routes>
              </Suspense>
            </Content>
          </Col>
        </Row>
      </Col>
    </Layout>
  );
};

export default AdminDashboardLayout;
