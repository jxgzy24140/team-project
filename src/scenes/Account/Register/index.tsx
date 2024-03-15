import { Button, Col, Input, Form, Radio } from "antd";
import { PRIMARY_COLOR } from "@/utils/constant";
import withRouter from "@/components/Layout/Router/withRouter";
import accountService from "@/services/account/accountService";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link } from "react-router-dom";
import { authLayouts } from "@/components/Layout/Router/router.config";

interface IProps {
  navigate: any;
}

const Register = (props: IProps) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (values: any) => {
    setIsLoading(true);
    const result = await accountService.createUser(values);
    if (result && result.success) {
      toast("Đăng ký thành công!");
      return props.navigate("/auth/login");
    }
    setIsLoading(false);
    toast(`Đăng ký thất bại!, ${result.message}`);
  };
  return (
    <Col className="w-full h-full flex justify-center items-center">
      <Form form={form} onFinish={onFinish}>
        <div className="flex justify-center items-center text-3xl mb-6">
          Đăng ký
        </div>
        <div className="flex">
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: "Vui lòng điền trường này",
              },
            ]}
          >
            <Input className="w-[174px] mr-2" placeholder="Họ" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: "Vui lòng điền trường này",
              },
            ]}
          >
            <Input className="w-[182px]" placeholder="Tên" />
          </Form.Item>
        </div>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Vui lòng điền trường này",
            },
          ]}
        >
          <Input placeholder="Địa chỉ Email" />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Vui lòng điền trường này",
            },
          ]}
        >
          <Input placeholder="Điện thoại" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Vui lòng điền trường này" }]}
        >
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>
        <Form.Item label="Giới tính" name="gender">
          <Radio.Group defaultValue={true}>
            <Radio value={true}>Nam</Radio>
            <Radio value={false}>Nữ</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="flex justify-center items-center text-white font-light mt-2 w-full"
            style={{ backgroundColor: PRIMARY_COLOR }}
            disabled={isLoading}
          >
            Đăng ký
          </Button>
        </Form.Item>
        <div className="mt-2">
          Bạn đã có tài khoản?
          <Link
            className="text-[#1677ff]"
            to={`/auth/${authLayouts.login.path}`}
          >
            Đăng nhập ngay
          </Link>
        </div>
      </Form>
    </Col>
  );
};
export default withRouter(Register);
