import withRouter from "@/components/Layout/Router/withRouter";
import { Col, Space, Table } from "antd";
import type { TableProps } from "antd";
import React from "react";

interface DataType {
  CategoryId: number;
  ProductName: string;
  Description: string;
  Image: string;
  Price: number;
  Discount: number;
  Quantity: number;
  InStock: boolean;
  CreationId: number;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "#",
    render: (_, record, index) => <p> {index}</p>,
  },
  {
    title: "Category Id",
    dataIndex: "CategoryId",
    key: "CategoryId",
  },
  {
    title: "Product Name",
    dataIndex: "ProductName",
    key: "ProductName",
  },
  {
    title: "Description",
    dataIndex: "Description",
    key: "Description",
  },
  {
    title: "Image",
    dataIndex: "Image",
    key: "Image",
    render: (image) => (
      // Width là 700px nhưng lại hiện 221px
      <img
        className="w-[150px] h-[150px] object-contain"
        src={image}
        alt={image}
      />
    ),
  },
  {
    title: "Price",
    dataIndex: "Price",
    key: "Price",
  },
  {
    title: "Discount",
    dataIndex: "Discount",
    key: "Discount",
  },
  {
    title: "Quantity",
    dataIndex: "Quantity",
    key: "Quantity",
  },
  {
    title: "In Stock",
    dataIndex: "InStock",
    key: "InStock",
    render: (text) => (text ? "True" : "False"),
  },
  {
    title: "Creation Id",
    dataIndex: "CreationId",
    key: "CreationId",
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
    CategoryId: 1,
    ProductName: "Laptop Gaming ASUS ROG Strix G15",
    Description:
      "Laptop gaming mạnh mẽ với chip Intel Core i7 thế hệ 13, card đồ họa NVIDIA GeForce RTX 4060, RAM 16GB DDR5, SSD 512GB.",
    Image: "https://m.media-amazon.com/images/I/81HRqN0o8rL.jpg",
    Price: 3999.99,
    Discount: 0,
    Quantity: 10,
    InStock: true,
    CreationId: 1,
  },
  {
    CategoryId: 2,
    ProductName: "Điện thoại thông minh Samsung Galaxy S23 Ultra",
    Description:
      "Điện thoại cao cấp với camera 200MP, màn hình AMOLED 6.8 inch, chip Snapdragon 8 Gen 2, RAM 12GB, bộ nhớ 512GB.",
    Image: "https://m.media-amazon.com/images/I/81HRqN0o8rL.jpg",
    Price: 1499.99,
    Discount: 5,
    Quantity: 20,
    InStock: true,
    CreationId: 2,
  },
  {
    CategoryId: 3,
    ProductName: "Tai nghe không dây Sony WH-1000XM5",
    Description:
      "Tai nghe chống ồn chủ động hàng đầu, chất lượng âm thanh tuyệt vời, thời gian pin lên đến 40 tiếng.",
    Image: "https://m.media-amazon.com/images/I/81HRqN0o8rL.jpg",
    Price: 499.99,
    Discount: 10,
    Quantity: 15,
    InStock: true,
    CreationId: 3,
  },
  {
    CategoryId: 4,
    ProductName: "Máy ảnh không gương lật Canon EOS R6 Mark II",
    Description:
      "Máy ảnh chuyên nghiệp với cảm biến full-frame 20 megapixel, khả năng quay video 8K, lấy nét tự động nhanh chóng và chính xác.",
    Image: "https://m.media-amazon.com/images/I/81HRqN0o8rL.jpg",
    Price: 5999.99,
    Discount: 0,
    Quantity: 5,
    InStock: true,
    CreationId: 4,
  },
  {
    CategoryId: 1,
    ProductName: "Laptop văn phòng Dell XPS 13",
    Description:
      "Laptop gọn nhẹ, thiết kế sang trọng, hiệu năng mạnh mẽ đáp ứng tốt các nhu cầu văn phòng.",
    Image: "https://m.media-amazon.com/images/I/81HRqN0o8rL.jpg",
    Price: 1299.99,
    Discount: 0,
    Quantity: 30,
    InStock: true,
    CreationId: 5,
  },
  {
    CategoryId: 5,
    ProductName: "Smart TV Samsung QLED 55 inch",
    Description:
      "Smart TV với chất lượng hình ảnh QLED sắc nét, công nghệ HDR sống động, hệ điều hành Tizen thông minh.",
    Image: "https://m.media-amazon.com/images/I/81HRqN0o8rL.jpg",
    Price: 799.99,
    Discount: 15,
    Quantity: 40,
    InStock: true,
    CreationId: 6,
  },
  {
    CategoryId: 6,
    ProductName: "Tủ lạnh Samsung Side-by-Side Inverter",
    Description:
      "Tủ lạnh dung tích lớn, công nghệ Twin Cooling Plus™ giúp duy trì độ ẩm và nhiệt độ lý tưởng.",
    Image: "https://m.media-amazon.com/images/I/81HRqN0o8rL.jpg",
    Price: 1999.99,
    Discount: 0,
    Quantity: 25,
    InStock: true,
    CreationId: 7,
  },
  {
    CategoryId: 7,
    ProductName: "Máy giặt Samsung Inverter 10kg",
    Description:
      "Máy giặt cửa ngang với công nghệ giặt hơi nước, động cơ Digital Inverter bền bỉ, tiết kiệm điện năng.",
    Image: "https://m.media-amazon.com/images/I/81HRqN0o8rL.jpg",
    Price: 599.99,
    Discount: 7,
    Quantity: 18,
    InStock: false,
    CreationId: 8,
  },
];

const Product = () => {
  return (
    <Col className="mx-auto min-h-full h-full md:p-6 2xl:p-10">
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </Col>
  );
};
export default withRouter(Product);
