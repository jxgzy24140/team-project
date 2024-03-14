import withRouter from "@/components/Layout/Router/withRouter";
import { Button, Col, Form, Input, InputNumber, Select, Upload } from "antd";
import { LeftOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Option } from "antd/es/mentions";
import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";
import ProductStore from "@/stores/productStore";
import { useParams } from "react-router-dom";

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

interface IProps {
  navigate: any;
  params: any;
  location: any;
  productStore: ProductStore;
}

const Edit = inject(Stores.ProductStore)(
  observer((props: IProps) => {
    const { navigate, productStore, params } = props;
    const { id } = useParams();
    const [form] = Form.useForm();
    useEffect(() => {
      getProduct(id);
    }, []);

    const getProduct = async (id) => {
      await productStore.get(id);
      form.setFieldsValue(props.productStore.editProduct);
      form.setFieldValue(
        "inStock",
        props.productStore.editProduct?.inStock == true ? "true" : "false"
      );
    };

    const [fileList, setFileList] = useState<any[]>([
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
    ]);

    const onChange = (values: any) => {
      console.log("values: ", values);

      if (values.file.status == "removed") setFileList([]);
      if (values.file.status == "uploading")
        setFileList([
          {
            uid: "-1",
            name: values.file.name,
            status: "done",
            url: URL.createObjectURL(values.file.originFileObj),
            originFileObj: values.file.originFileObj,
          },
        ]);
    };

    const onPreview = async (file: any) => {
      let src = file.url as string;
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj as any);
          reader.onload = () => resolve(reader.result as string);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);
    };

    const onRemove = (values: any) => {
      setFileList([]);
    };

    const onFinish = async (values: any) => {
      console.log("values: ", JSON.stringify(values));
      console.log("image: ", JSON.stringify(fileList));
    };

    return (
      <Col className="mx-auto min-h-full h-full md:p-6 2xl:p-10">
        <div className="py-3">
          <span className="cursor-pointer" onClick={() => navigate(-1)}>
            <LeftOutlined /> Trở lại
          </span>
        </div>
        <Form
          {...formItemLayout}
          form={form}
          onFinish={onFinish}
          variant="filled"
          style={{ maxWidth: 600 }}
        >
          {/* Phần Product Name */}
          <Form.Item
            label="Product Name"
            name="productName"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input />
          </Form.Item>

          {/* Phần Description */}
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          {/* Phần Upload hình ảnh (nên xem lại) */}
          <Form.Item label="Upload" valuePropName="fileList">
            <Upload
              action="/upload.do"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              onRemove={onRemove}
            >
              {fileList.length === 0 ? (
                <button style={{ border: 0, background: "none" }} type="button">
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              ) : null}
            </Upload>
          </Form.Item>

          {/* Phần Price (nên làm thế này hay đưa thành Input bình thường) */}
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          {/* Phần Discount (tương tự trên) */}
          <Form.Item
            label="Discount"
            name="discount"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          {/* Phần Quantity */}
          <Form.Item
            label="Quantity"
            name="quantity"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          {/* Phần InStock */}
          <Form.Item
            name="inStock"
            label="In Stock"
            rules={[{ required: true, message: "Please select InStock!" }]}
          >
            <Select placeholder="Select your InStock">
              <Option value={"true"}>Yes</Option>
              <Option value={"false"}>No</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Lưu thay đổi</Button>
          </Form.Item>
        </Form>
      </Col>
    );
  })
);
export default withRouter(Edit);
