import React from "react";
import { Layout, Col, Form, Button, Input } from "antd";

export const AdminHeaderLayout = () => {
  return (
    <Layout.Header className="bg-white opacity-85 container w-full min-w-full flex flex-row">
      <Col span={12}>
        <Form className="flex">
          <Input placeholder="Type something..." />
          <Button htmlType="submit">Search</Button>
        </Form>
      </Col>
      <Col span={12}>User</Col>
    </Layout.Header>
  );
};
