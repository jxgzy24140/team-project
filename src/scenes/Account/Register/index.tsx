import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";
import withRouter from "@/components/Layout/Router/withRouter";
import { Button, Col, Form, Input, Radio, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { PRIMARY_COLOR } from "@/utils/constant";
import AuthenticationStore from "@/stores/authenticationStore";
interface IProps {
  navigate: any;
  authenticationStore: AuthenticationStore;
}
const Register = inject(Stores.ProductStore)(
  observer((props: IProps) => {
    return (
      <Col className="w-full h-full flex justify-center items-center">
        <Form>
          <div className="flex justify-center items-center text-3xl">
            Đăng kí
          </div>
          <div className="flex flex-col">
            <div>
              <Input className="w-[174px] mt-2 mr-2" placeholder="Họ" />
              <Input className="w-[182px] mt-2" placeholder="Tên" />
            </div>
            <Input className="w-[364px] mt-2" placeholder="Địa chỉ email" />
            <Input className="w-[364px] mt-2" placeholder="Điện thoại" />
            <div className="flex mt-2 items-center">
              <div className="mr-2">Giới tính: </div>
              <Radio.Group>
                <Radio value="">Nam</Radio>
                <Radio value="">Nữ</Radio>
                <Radio value="">Khác</Radio>
              </Radio.Group>
            </div>
            <div className="flex mt-2 items-center">
              <div className="mr-2">Hình đại diện:</div>
              <Upload>
                <button className="p-3 rounded-[10px] bg-[#ccc]" type="button">
                  <PlusOutlined />
                  <div className="mt-2">Tải hình</div>
                </button>
              </Upload>
            </div>
          </div>

          <Button
            htmlType="submit"
            className="flex justify-center items-center text-slate-950 font-light mt-2 w-full"
            style={{ backgroundColor: PRIMARY_COLOR }}
            onClick={() => props.navigate("/account/login")}
          >
            Đăng kí
          </Button>
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
