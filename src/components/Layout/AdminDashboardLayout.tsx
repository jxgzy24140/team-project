import React, { Suspense } from "react";
import { Layout, Row, Col } from "antd";
import { Route, Routes } from "react-router-dom";
import { userLayout } from "./Router/router.config";
import Sidebar from "@/components/Layout/Sidebar";
import { AdminHeaderLayout } from "@/components/Layout/Header";

const { Content } = Layout;
const AdminDashboardLayout = () => {
  return (
    <Layout className="w-full h-screen max-h-screen flex flex-row">
      {/* Sidebar của trang Admin */}
      <Col span={4}>
        <Sidebar />
      </Col>

      {/* Header và Content của trang Admin */}
      <Col span={20}>
        <Row className="flex-col">
          {/* Header của trang Admin */}
          <Col>
            <AdminHeaderLayout />
          </Col>

          {/* Content của trang Admin */}
          <Col>
            <Content
              className="h-full min-h-full max-h-full"
              style={{ minHeight: "unset", backgroundColor: "#f1f5f9" }}
            >
              <div
                style={{ overflowY: "auto", maxHeight: "calc(100vh - 40px)" }}
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
              </div>
            </Content>
          </Col>
        </Row>
      </Col>
    </Layout>
  );
};

export default AdminDashboardLayout;
