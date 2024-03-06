import withRouter from "@/components/Layout/Router/withRouter";
import { Col, Space, Table } from "antd";
import type { TableProps } from "antd";
import React from "react";

interface DataType {
  key: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a className="text-red-500">Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    firstName: "Nguyễn",
    lastName: "Văn A",
    email: "nguyenvana@gmail.com",
    phoneNumber: "0987654321",
    gender: "Nam",
  },
  {
    key: "2",
    firstName: "Trần",
    lastName: "Thị B",
    email: "tranthib@gmail.com",
    phoneNumber: "0123456789",
    gender: "Nữ",
  },
  {
    key: "3",
    firstName: "Lê",
    lastName: "Văn C",
    email: "levanc@gmail.com",
    phoneNumber: "0912345678",
    gender: "Nam",
  },
];

const AdminAccount = () => {
  return (
    <Col className="mx-auto min-h-full h-full md:p-6 2xl:p-10">
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </Col>
  );
};
export default withRouter(AdminAccount);
