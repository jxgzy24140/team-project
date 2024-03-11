import withRouter from "@/components/Layout/Router/withRouter";
import { Col, Form, Input, InputNumber, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import { Option } from "antd/es/mentions";

// Layout cho Form
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const Edit = () => {
  return (
    <Col className="mx-auto min-h-full h-full md:p-6 2xl:p-10">
      <div>Product Edit</div>
      <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
        {/* Phần Product Name */}
        <Form.Item
          label="Product Name"
          name="ProductName"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        {/* Phần Description */}
        <Form.Item
          label="Description"
          name="Description"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        {/* Phần Upload hình ảnh (nên xem lại) */}
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: "none" }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>

        {/* Phần Price (nên làm thế này hay đưa thành Input bình thường) */}
        <Form.Item
          label="Price"
          name="Price"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        {/* Phần Discount (tương tự trên) */}
        <Form.Item
          label="Discount"
          name="Discount"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        {/* Phần Quantity */}
        <Form.Item
          label="Quantity"
          name="Quantity"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        {/* Phần InStock */}
        <Form.Item
          name="InStock"
          label="In Stock"
          rules={[{ required: true, message: "Please select InStock!" }]}
        >
          <Select placeholder="Select your InStock">
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
        </Form.Item>
      </Form>
    </Col>
  );
};
export default withRouter(Edit);
