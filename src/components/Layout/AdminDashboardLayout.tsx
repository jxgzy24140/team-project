import React, { Suspense } from "react";
import { Layout, Row, Col } from "antd";
import { AdminHeaderLayout } from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
const { Content } = Layout;
const AdminDashboardLayout = () => {
  return (
    <Layout className="w-full h-screen max-h-screen flex flex-row ">
      <Col span={4} style={{ border: "1px solid red" }}>
        <Sidebar />
      </Col>
      <Col span={20} style={{ border: "1px solid blue" }}>
        <Row className="flex-col">
          <Col className="h-10" style={{ border: "1px solid yellow" }}>
            <AdminHeaderLayout />
          </Col>
          <Col style={{ height: "calc(100vh - 40px)" }}>
            <Content
              className="h-full min-h-full bg-slate-500"
              style={{ minHeight: "unset" }}
            >
              <Suspense fallback={<div>Loading...</div>}></Suspense>
            </Content>
          </Col>
        </Row>
      </Col>
    </Layout>
  );
};

export default AdminDashboardLayout;