import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";
import OrderStore from "@/stores/orderStore";
import {
  Button,
  Col,
  Divider,
  InputNumber,
  Row,
  Form,
  Input,
  Select,
} from "antd";
import { CloseOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import PaymentStore from "@/stores/paymentStore";
const { TextArea } = Input;
interface IProps {
  navigate: any;
  orderStore: OrderStore;
  paymentStore: PaymentStore;
}
const Cart = inject(
  Stores.OrderStore,
  Stores.PaymentStore
)(
  observer((props: IProps) => {
    const { navigate, orderStore, paymentStore } = props;
    const [provinces, setProvinces] = useState<any>([]);
    const [province, setProvince] = useState<any>(null);
    const [districts, setDistricts] = useState<any>([]);
    const [district, setDistrict] = useState<any>(null);
    const [wards, setWards] = useState<any>([]);
    const [form] = Form.useForm();

    const initalValues = {
      paymentType: 1,
      shippingType: 1,
    };

    const fetchDistricts = async (id: any) => {
      const districtsResponse = await axios.get(
        `https://vapi.vnappmob.com/api/province/district/${id}`
      );
      if (districtsResponse.status) {
        const data: any = [];
        districtsResponse.data.results.map((district) => {
          data.push({
            value: district.district_id,
            label: district.district_name,
          });
        });
        setDistricts(data);
      }
    };

    const fetchWards = async (id: any) => {
      const wardsResponse = await axios.get(
        `https://vapi.vnappmob.com/api/province/ward/${id}`
      );
      if (wardsResponse.status) {
        const data: any = [];
        wardsResponse.data.results.map((ward) => {
          data.push({
            value: ward.ward_id,
            label: ward.ward_name,
          });
        });
        setWards(data);
      }
    };

    useEffect(() => {
      const fetchProvinces = async () => {
        const provincesResponse = await axios.get(
          "https://vapi.vnappmob.com/api/province"
        );
        if (provincesResponse.status) {
          const data: any = [];
          provincesResponse.data.results.map((province) => {
            data.push({
              value: province.province_id,
              label: province.province_name,
            });
          });
          setProvinces(data);
        }
      };
      fetchProvinces();
      form.setFieldsValue(initalValues);
    }, []);

    useEffect(() => {
      fetchDistricts(province);
    }, [province]);

    useEffect(() => {
      fetchWards(district);
    }, [district]);

    const handleChangeProvice = (value) => {
      setProvince(value);
      setDistricts([]);
      setDistrict(null);
      setWards([]);
      form.setFieldsValue({
        district: undefined,
        ward: undefined,
      });
    };

    const handleChangeDistrict = (value) => {
      setDistrict(value);
      setWards([]);
    };

    const getProducts = () => {
      const products: any = [];
      orderStore.shoppingCart.map((item: any) => {
        products.push({
          productId: item.productId,
          quantity: item.quantity,
        });
      });
      return products;
    };

    const onFinish = async (values: any) => {
      values.province = provinces.find((x) => x.value == values.province).label;
      values.district = districts.find((x) => x.value == values.district).label;
      values.ward = wards.find((x) => x.value == values.ward).label;
      const products = getProducts();
      const newOrder = {
        ...values,
        paymentMethodId: values.paymentMethodId,
        products,
        shippingFee: 0,
        amount: 0,
        userId: "0",
      };
      await orderStore.createOrder(newOrder);
    };
    return (
      <Row className="p-3 gap-3">
        <Col className="p-3" style={{ flexGrow: "4" }}>
          <Row className="justify-between items-center py-2">
            <p className="font-bold text-xl">Giỏ hàng</p>
            <p className="font-semibold">
              {orderStore.shoppingCart.length} Sản phẩm
            </p>
          </Row>
          <Divider />
          {orderStore.shoppingCart &&
            orderStore.shoppingCart.map((item: any) => {
              return (
                <Row>
                  <Col className="flex justify-center items-center">
                    <img
                      src="https://hakiet.s3.ap-southeast-1.amazonaws.com/pngtree-fresh-bakerry-croissant-png-image_10275618.png"
                      className="w-[200px] pr-2"
                      alt=""
                    />
                  </Col>
                  <Col style={{ width: "calc(100% - 200px)" }}>
                    <Row className="justify-start items-center">
                      <p className="text-2xl capitalize">{item.productCode}</p>
                    </Row>
                    <Row className="justify-between items-center py-3">
                      <p>{item.price} đ</p>
                      <CloseOutlined
                        onClick={() =>
                          orderStore.editShoppingCart(
                            item.productId,
                            undefined,
                            "remove"
                          )
                        }
                      />
                    </Row>
                    <Row className="gap-2 justify-start items-center">
                      <p className="font-bold ">Số lượng:</p>
                      <Button
                        className="w-[40px] h-[40px] flex justify-center items-center"
                        onClick={() =>
                          orderStore.editShoppingCart(
                            item.productId,
                            Number(item.quantity) - 1,
                            "update"
                          )
                        }
                      >
                        <MinusOutlined />
                      </Button>
                      <InputNumber
                        // min={1}
                        // max={editProduct.quantity}
                        defaultValue={item.quantity}
                        value={item.quantity}
                        onChange={(value) =>
                          orderStore.editShoppingCart(
                            item.productId,
                            value,
                            "update"
                          )
                        }
                        className="w-[60px] h-[40px] flex justify-center items-center"
                      />
                      <Button
                        className="w-[40px] h-[40px] flex justify-center items-center"
                        onClick={() =>
                          orderStore.editShoppingCart(
                            item.productId,
                            Number(item.quantity) + 1,
                            "update"
                          )
                        }
                      >
                        <PlusOutlined />
                      </Button>
                    </Row>
                  </Col>
                </Row>
              );
            })}
        </Col>
        <Col className="flex flex-col gap-2 p-3" style={{ flexGrow: "1" }}>
          <Row className="py-2">
            <p>Thanh toán</p>
          </Row>
          <Divider />
          <Row>
            <Form
              form={form}
              onFinish={onFinish}
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}
            >
              <Form.Item
                label="Tên người nhận"
                name="receiveName"
                rules={[
                  { required: true, message: "Vui lòng nhập tên người nhận" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Vui lòng nhập tên người nhận" },
                ]}
              >
                <Input type="email" />
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại người nhận",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                label="Tỉnh/Thành phố"
                name="province"
                rules={[
                  { required: true, message: "Vui lòng chọn tỉnh/thành phố" },
                ]}
              >
                <Select
                  options={provinces && provinces}
                  onChange={(value) => handleChangeProvice(value)}
                />
              </Form.Item>
              <Form.Item
                label="Quận/Huyện"
                name="district"
                rules={[
                  { required: true, message: "Vui lòng chọn quận/huyện" },
                ]}
              >
                <Select
                  options={districts && districts}
                  onChange={(value) => handleChangeDistrict(value)}
                />
              </Form.Item>
              <Form.Item
                label="Phường/Xã"
                name="ward"
                rules={[{ required: true, message: "Vui lòng chọn phường/xã" }]}
              >
                <Select options={wards && wards} />
              </Form.Item>
              <Form.Item
                label="Địa chỉ"
                name="addressDetail"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập địa chỉ nhận hàng",
                  },
                ]}
              >
                <TextArea />
              </Form.Item>
              <Form.Item label="Thanh toán" name="paymentMethodId">
                <Select
                  options={[
                    { value: 1, label: "COD" },
                    { value: 2, label: "Momo" },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Thanh toán" name="shippingMethodId">
                <Select
                  options={[
                    { value: 1, label: "GHTK" },
                    { value: 2, label: "GHN" },
                  ]}
                />
              </Form.Item>
              <Form.Item style={{ display: "none" }}>
                <Button htmlType="submit" id="submit-btn">
                  submit
                </Button>
              </Form.Item>
            </Form>
          </Row>
          <Divider />
          <Row className="justify-between items-center">
            <p>Thành tiền: </p>
            <p>{orderStore.getTotalShoppingCart().toLocaleString()} đ</p>
          </Row>
          <Divider />
          <Row className="justify-between items-center">
            <p>Thành tiền: </p>
            <p>{orderStore.getTotalShoppingCart().toLocaleString()} đ</p>
          </Row>
          <Row>
            <Button
              onClick={() => document.getElementById("submit-btn")?.click()}
              className="w-full flex justify-center items-center px-5 py-2 text-white bg-[#FFAC00]"
            >
              Thanh toán
            </Button>
          </Row>
        </Col>
      </Row>
    );
  })
);

export default Cart;
