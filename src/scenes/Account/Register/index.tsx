import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";
import { Button, Col, Input, Row, Form } from "antd";
import { PRIMARY_COLOR } from "@/utils/constant";
import Icon from "@/components/Layout/Icon";

interface IProps {}
const Register = inject(Stores.ProductStore)(
  observer((props: IProps) => {
    return (
      <Col className="w-full h-full flex justify-center items-center">
        <Form>
          <div className="flex justify-center items-center text-3xl">
            Đăng kí
          </div>
          <Row>
            <Input className="mt-2" placeholder="Tên đăng nhập/Email" />
            <Input className="mt-2" placeholder="Mật khẩu" />
            <Input className="mt-2" placeholder="Mật khẩu" />
          </Row>
          <Button
            htmlType="submit"
            className="flex justify-center items-center text-slate-950 font-light mt-2 w-full"
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            Đăng kí
          </Button>
          <div className="mt-2">
            Bạn đã có tài khoản?
            <a className="text-[#1677ff]"> Đăng nhập ngay</a>
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

export default Register;
