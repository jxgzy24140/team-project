import withRouter from "@/components/Layout/Router/withRouter";
import { Card, Col } from "antd";
import React from "react";

interface IProps {
  navigate: any;
  data: any;
  onClick: any;
}

const Product = (props: IProps) => {
  return (
    <Col
      className="flex flex-col w-1/5 px-3 py-4 cursor-pointer"
      onClick={() => props.onClick(props.data.productId)}
    >
      <Card className="w-full bg-white shadow-slate-900">
        <img
          loading="lazy"
          src={props.data.image}
          className="w-full max-h-[450px]"
        />
      </Card>
      <div className="flex flex-col py-2 justify-start items-start">
        <h4 className="text-black text-left font-bold">
          {props.data.productName}
        </h4>
        <p className="text-black text-left">{props.data.productPrice} đ</p>
      </div>
    </Col>
  );
};

export default withRouter(Product);
