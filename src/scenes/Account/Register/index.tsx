import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";
import { Button, Col, Input, Form, Radio } from "antd";
import { PRIMARY_COLOR } from "@/utils/constant";
import withRouter from "@/components/Layout/Router/withRouter";

type FieldType = {
  firstName?: string;
  lastName?: string;
  email?: string;

  password?: string;
  remember?: string;
};

interface IProps {}
const Register = inject(Stores.ProductStore)(
  observer((props: IProps) => {
    return (
      // Bản test
      <Col className="w-full h-full flex justify-center items-center">
        <Form>
          <div className="flex justify-center items-center text-3xl mb-6">
            Đăng ký
          </div>
          <div className="flex">
            <Form.Item<FieldType>
              label=""
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập Họ",
                },
              ]}
            >
              <Input className="w-[174px] mr-2" placeholder="Họ" />
            </Form.Item>
            <Form.Item>
              <Input className="w-[182px]" placeholder="Tên" />
            </Form.Item>
          </div>
          <Form.Item>
            <Input className="" placeholder="Địa chỉ Email" />
          </Form.Item>
          <Form.Item>
            <Input className="" placeholder="Điện thoại" />
          </Form.Item>
          <Form.Item<FieldType>
            label=""
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item label="Giới tính">
            <Radio.Group>
              <Radio value="nam">Nam</Radio>
              <Radio value="nữ">Nữ</Radio>
              <Radio value="khác">Khác</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="flex justify-center items-center text-slate-950 font-light mt-2 w-full"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              Đăng ký
            </Button>
          </Form.Item>
          <div className="mt-2">
            Bạn đã có tài khoản?
            <a className="text-[#1677ff]"> Đăng nhập ngay</a>
          </div>
        </Form>
      </Col>
    );
  })
);
export default withRouter(Register);
