import React from "react";
import { Layout, Col, Form, Button, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMessage } from "@fortawesome/free-solid-svg-icons";

// const { Search } = Input;

export const AdminHeaderLayout = () => {
  return (
    <Layout.Header className="bg-white py-4 opacity-85 container w-full min-w-full flex flex-row">
      {/* Phần Search */}
      <Col span={12} className="flex justify-center">
        {/* Button bị background transparent */}
        {/* <Search placeholder="input search text" enterButton /> */}
        <Form className="flex items-center">
          <Input className="w-[509px]" placeholder="Type something..." />
          <Button className="ml-2" htmlType="submit">
            Search
          </Button>
        </Form>
      </Col>

      {/* Phần User */}
      <Col span={12} className="flex justify-end items-center gap-7">
        <div className="relative flex items-center justify-center before:absolute before:h-[30px] before:w-[30px] before:rounded-full before:bg-[#e7e9ed]">
          <FontAwesomeIcon icon={faBell} className="text-[14px] z-10" />
        </div>
        <div className="relative flex items-center justify-center before:absolute before:h-[30px] before:w-[30px] before:rounded-full before:bg-[#e7e9ed]">
          <FontAwesomeIcon icon={faMessage} className="text-[14px] z-10" />
        </div>
        <div>Trần Đỗ Hoàng Long</div>
        <div>Front end coder</div>
      </Col>
    </Layout.Header>
  );
};
