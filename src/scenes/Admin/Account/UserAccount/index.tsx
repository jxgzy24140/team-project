import withRouter from "@/components/Layout/Router/withRouter";
import { Col, Select, Space, Table } from "antd";
import type { TableProps } from "antd";
import React from "react";

// Kiểu dữ liệu
interface DataType {
  key: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  active: boolean;
  avatar: string;
  createdDate: Date;
  updatedDate: Date;
}

// Lựa chọn của mục Active
const options = [
  { value: true, label: "Active" },
  { value: false, label: "Inactive" },
];

// Cấu trúc columns của table
const columns: TableProps<DataType>["columns"] = [
  {
    title: "#",
    render: (_, record, index) => <p> {index}</p>,
  },
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
    title: "Active",
    dataIndex: "active",
    key: "active",
    render: (_, record) => <Select defaultValue={true} options={options} />,
  },
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (image) => (
      <img className="w-[50px] h-[50px]" src={image} alt={image} />
    ),
  },
  {
    title: "Created Date",
    dataIndex: "createdDate",
    key: "createdDate",
    render: (date) =>
      date.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
  },
  {
    title: "Updated Date",
    dataIndex: "updatedDate",
    key: "updatedDate",
    render: (date) =>
      date.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a className="text-red-500">Delete</a>
      </Space>
    ),
  },
];

// Dummy Data
const data: DataType[] = [
  {
    key: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1234567890",
    gender: "Male",
    active: true,
    avatar:
      "https://i.pinimg.com/736x/35/81/95/358195f63181ad8eb974465c4899ee2a.jpg",
    createdDate: new Date("2024-03-05"),
    updatedDate: new Date("2024-03-05"),
  },
  {
    key: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+9876543210",
    gender: "Female",
    active: false,
    avatar:
      "https://i.pinimg.com/736x/35/81/95/358195f63181ad8eb974465c4899ee2a.jpg",
    createdDate: new Date("2024-02-20"),
    updatedDate: new Date("2024-03-02"),
  },
  {
    key: "3",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    phoneNumber: "+4567890123",
    gender: "Male",
    active: true,
    avatar:
      "https://i.pinimg.com/736x/35/81/95/358195f63181ad8eb974465c4899ee2a.jpg",
    createdDate: new Date("2024-01-15"),
    updatedDate: new Date("2024-03-06"),
  },
  {
    key: "4",
    firstName: "Sarah",
    lastName: "Williams",
    email: "sarah.williams@example.com",
    phoneNumber: "+7890123456",
    gender: "Female",
    active: false,
    avatar:
      "https://i.pinimg.com/736x/35/81/95/358195f63181ad8eb974465c4899ee2a.jpg",
    createdDate: new Date("2023-12-10"),
    updatedDate: new Date("2024-02-25"),
  },
  {
    key: "5",
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@example.com",
    phoneNumber: "+3210987654",
    gender: "Male",
    active: true,
    avatar:
      "https://i.pinimg.com/736x/35/81/95/358195f63181ad8eb974465c4899ee2a.jpg",
    createdDate: new Date("2023-11-05"),
    updatedDate: new Date("2024-03-01"),
  },
  {
    key: "6",
    firstName: "Jennifer",
    lastName: "Jones",
    email: "jennifer.jones@example.com",
    phoneNumber: "+6543210987",
    gender: "Female",
    active: false,
    avatar:
      "https://i.pinimg.com/736x/35/81/95/358195f63181ad8eb974465c4899ee2a.jpg",
    createdDate: new Date("2023-10-01"),
    updatedDate: new Date("2024-02-18"),
  },
  {
    key: "7",
    firstName: "Matthew",
    lastName: "Miller",
    email: "matthew.miller@example.com",
    phoneNumber: "+9876543210",
    gender: "Male",
    active: true,
    avatar:
      "https://i.pinimg.com/736x/35/81/95/358195f63181ad8eb974465c4899ee2a.jpg",
    createdDate: new Date("2023-09-15"),
    updatedDate: new Date("2024-02-10"),
  },
  {
    key: "8",
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@example.com",
    phoneNumber: "+1234567890",
    gender: "Female",
    active: false,
    avatar:
      "https://i.pinimg.com/736x/35/81/95/358195f63181ad8eb974465c4899ee2a.jpg",
    createdDate: new Date("2023-08-20"),
    updatedDate: new Date("2024-03-12"),
  },
];

const UserAccount = () => {
  return (
    <Col className="mx-auto min-h-full h-full">
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </Col>
  );
};
export default withRouter(UserAccount);
