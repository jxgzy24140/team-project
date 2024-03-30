import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";
import { Button, Checkbox, Col, Input, Form } from "antd";
import { PRIMARY_COLOR } from "@/utils/constant";
import Icon from "@/components/Layout/Icon";
import withRouter from "@/components/Layout/Router/withRouter";
import AuthenticationStore from "@/stores/authenticationStore";
import { Link } from "react-router-dom";
import { authLayouts } from "@/components/Layout/Router/router.config";
import { containsSpecialChar, startsWithNumber } from "@/utils/helpers";
import { toast } from "react-toastify";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

interface IProps {
  navigate: any;
  authenticationStore: AuthenticationStore;
}
const Login = inject(Stores.AuthenticationStore)(
  observer((props: IProps) => {
    const { navigate, authenticationStore } = props;

    if (authenticationStore.isAuthenticated) return navigate("/home");
    const onFinish = async (values: any) => {
      const { email, password } = values;

      if (
        email.length < 8 ||
        email.length > 32 ||
        // containsSpecialChar(email) ||
        startsWithNumber(email) ||
        email.includes(" ")
      ) {
        toast("Tên đăng nhập không hợp lệ!");
      } else {
        if (
          // password.length < 8 ||
          password.length > 32 ||
          password.includes(" ") ||
          containsSpecialChar(password)
        ) {
          toast("Mật khẩu không hợp lệ!");
        } else {
          const data = await authenticationStore.login(values);
          if (!data) {
            toast("Tên đăng nhập hoặc mật khẩu không chính xác!");
          } else {
            setTimeout(() => (window.location.href = "/home"), 2000);
            toast("Đăng nhập thành công! Vui lòng đợi trong giây lát...");
          }
        }
      }
    };
    return (
      <Col className="w-full h-full flex justify-center items-center">
        <Form onFinish={onFinish}>
          <div className="flex justify-center items-center text-3xl mb-6">
            Đăng nhập
          </div>
          <Form.Item
            label=""
            name="email"
            className="w-[364px]"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ email!",
              },
            ]}
          >
            <Input placeholder="Địa chỉ Email" />
          </Form.Item>
          <Form.Item<FieldType>
            label=""
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item<FieldType> name="remember" valuePropName="checked">
            <div className="flex items-center">
              {/* Lỗi chưa auto checked */}
              <Checkbox>Ghi nhớ mật khẩu</Checkbox>
              <a className="flex justify-end ml-auto text-[#1677ff]">
                Quên mật khẩu
              </a>
            </div>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="flex justify-center items-center text-slate-950 font-light mt-2 w-full"
              style={{ backgroundColor: PRIMARY_COLOR }}
              id="submit-btn"
            >
              Đăng nhập
            </Button>
          </Form.Item>
          <div className="mt-2">
            Bạn chưa có tài khoản?
            <Link
              className="text-[#1677ff]"
              to={`/auth/${authLayouts.register.path}`}
            >
              {" "}
              Đăng ký ngay
            </Link>
          </div>
          <div className="flex justify-center items-center mt-6 mb-1">
            Hoặc đăng nhập sử dụng
          </div>
          <div className="flex justify-center items-center">
            <Icon
              img={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png"
              }
              outerStyles={{
                backgroundColor: "transparent",
                justifyContent: "center",
              }}
              contentStyles={{ borderRadius: "5px" }}
              color={PRIMARY_COLOR}
            />
            <Icon
              img={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
              }
              outerStyles={{
                backgroundColor: "transparent",
                justifyContent: "center",
              }}
              contentStyles={{ borderRadius: "5px" }}
              color={PRIMARY_COLOR}
            />
            <Icon
              img={
                "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              }
              outerStyles={{
                backgroundColor: "transparent",
                justifyContent: "center",
              }}
              contentStyles={{ borderRadius: "5px" }}
              color={PRIMARY_COLOR}
            />
          </div>
        </Form>
      </Col>
    );
  })
);

export default withRouter(Login);
