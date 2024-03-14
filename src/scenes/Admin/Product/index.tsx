import withRouter from "@/components/Layout/Router/withRouter";
import ProductStore from "@/stores/productStore";
import Stores from "@/stores/storeIdentifier";
import { Col, Space, Table, Popconfirm, Button } from "antd";
import { inject, observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { localeData, weekdays } from "moment";
import dayjs from "dayjs";
import { adminLayouts } from "@/components/Layout/Router/router.config";
dayjs.extend(weekdays);
dayjs.extend(localeData);

const columns = ({ productStore, navigate }) => [
  {
    title: "#",
    render: (record: any) => <p> {record.productId}</p>,
  },
  {
    title: "Category Name",
    dataIndex: "categoryName",
    key: "CategoryName",
  },
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "ProductName",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => (
      <img
        className="w-[150px] h-[150px] object-contain"
        src={image}
        alt={image}
      />
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "Price",
  },
  {
    title: "Discount",
    dataIndex: "discount",
    key: "Discount",
  },
  {
    title: "Quantity",
    key: "Quantity",
    render: (record: any) => {
      if (record.quantity != 0)
        return (
          <p className="px-2 py-1 bg-blue-500 text-white  text-center">
            {record.quantity}
          </p>
        );
      return (
        <p className="px-2 py-1 bg-red-500 text-white text-center">Hết hàng!</p>
      );
    },
  },
  {
    title: "In Stock",
    key: "InStock",
    render: (record: any) => {
      const bgColorClass = record.inStock ? "bg-blue-500" : "bg-red-500";
      const classNames = `px-2 py-1 text-white text-center ${bgColorClass}`;
      return <p className={classNames}>{record.inStock ? "Yes" : "No"}</p>;
    },
  },
  {
    title: "Creator",
    dataIndex: "creatorName",
    key: "CreatorName",
  },
  {
    title: "Created Date",
    key: "createdDate",
    render: (record: any) => (
      <p>
        {record.createdDate != null
          ? dayjs(record.createdDate).format("YYYY-MM-DD HH:mm:ss")
          : "Invalid Date"}
      </p>
    ),
  },
  {
    title: "Last Updated",
    key: "LastUpdated",
    render: (record: any) => (
      <p>
        {record.updatedDate != null
          ? dayjs(record.updatedDate).format("YYYY-MM-DD HH:mm:ss")
          : "Invalid Date"}
      </p>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      const confirm = async () => {
        await productStore.delete(record.productId);
      };
      return (
        <Space size="middle">
          <a
            onClick={() =>
              navigate(
                adminLayouts.product.path.replace(
                  "products/:id",
                  record.productId
                )
              )
            }
          >
            Edit
          </a>
          <Popconfirm
            title="Xóa sản phẩm"
            description="Bạn có chắc sẽ xóa sản phẩm này?"
            onConfirm={confirm}
            okText="Có"
            cancelText="Hủy"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      );
    },
  },
];

interface IProps {
  productStore: ProductStore;
  navigate: any;
}

const Product = inject(Stores.ProductStore)(
  observer((props: IProps) => {
    const { productStore, navigate } = props;
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);

    useEffect(() => {
      initValue();
    }, []);

    const initValue = async () => {
      await productStore.getAll(pageNumber, pageSize);
    };

    return (
      <Col className="mx-auto min-h-full h-full">
        <Table
          columns={columns({ productStore, navigate })}
          dataSource={
            productStore?.products?.items ?? productStore?.products?.items
          }
          pagination={{ pageSize: pageSize }}
        />
      </Col>
    );
  })
);
export default withRouter(Product);
