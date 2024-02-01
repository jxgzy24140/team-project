import { footerIntroduce, footerRules, footerContact } from "@/utils/appConfig";
import { Button, Col, Form, Input, Layout, Row } from "antd";
import Icon from "@/components/Layout/Icon";
import React from "react";
import { PRIMARY_COLOR } from "@/utils/constant";

const Footer = () => {
  const TextComponent = (type: string, content: string) => {
    if (type === "heading")
      return <h3 className="text-white text-base text-left mb-3">{content}</h3>;
    return <p className="text-white  text-sm  text-left py-1">{content}</p>;
  };

  return (
    <Layout.Footer
      style={{
        width: "100%",
        backgroundColor: "#000000",
        border: "1px solid red",
        opacity: 0.85,
      }}
    >
      <Row>
        <Col span={12}>
          <Row className="flex justify-around space-x-2">
            <Col>
              {footerIntroduce.map((value: any, index) => {
                return (
                  <div key={index}>
                    {TextComponent(value.type, value.content)}
                  </div>
                );
              })}
            </Col>
            <Col>
              {footerRules.map((value: any, index) => {
                return (
                  <div key={index}>
                    {TextComponent(value.type, value.content)}
                  </div>
                );
              })}
            </Col>
            <Col>
              {TextComponent(footerContact.type, footerContact.content)}
              {TextComponent("heading", "Liên hệ")}
              {TextComponent("p", `Tầng 3-4 Hub Building TP.Hồ Chí Minh`)}
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={12}>
              <h3 className="text-white font-medium">Theo dõi chúng tôi</h3>
              <Row className="flex gap-1">
                <Icon
                  img={
                    "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg"
                  }
                  outerStyles={{
                    backgroundColor: "transparent",
                    justifyContent: "left",
                  }}
                  contentStyles={{ borderRadius: "5px" }}
                  color={PRIMARY_COLOR}
                />
                <Icon
                  img={
                    "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg"
                  }
                  outerStyles={{
                    backgroundColor: "transparent",
                    justifyContent: "left",
                  }}
                  contentStyles={{ borderRadius: "5px" }}
                  color={PRIMARY_COLOR}
                />
                <Icon
                  img={
                    "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg"
                  }
                  color={PRIMARY_COLOR}
                  outerStyles={{
                    backgroundColor: "transparent",
                    justifyContent: "left",
                  }}
                  contentStyles={{ borderRadius: "5px" }}
                />
              </Row>
            </Col>
            <Col span={12}>
              <Row className="flex gap-2">
                <h3 className="text-white font-bold">
                  Cập nhật các tin tức mới nhất
                </h3>
                <p className="text-white">
                  trở thành người đầu tiên biết về ưu đãi và các cập nhật mới
                  nhất.
                </p>
                <Form>
                  <Input placeholder="Địa chỉ email" />
                  <Input
                    placeholder="Số điện thoại (Tùy chọn)"
                    className="mt-2"
                  />
                  <Button
                    htmlType="submit"
                    className="flex justify-center items-center text-slate-950 font-light mt-4 w-full"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                  >
                    Đăng ký theo dõi
                  </Button>
                </Form>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
