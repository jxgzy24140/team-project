import withRouter from "@/components/Layout/Router/withRouter";
import { Col, Form, Input } from "antd";
import React from "react";

const UserEdit = () => {
  return (
    <Col className="mx-auto min-h-full h-full md:p-6 2xl:p-10">
      <div>User Edit</div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="First Name">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input />
        </Form.Item>
        <Form.Item label="Gender">
          <Input />
        </Form.Item>
      </Form>
    </Col>
  );
};
export default withRouter(UserEdit);
