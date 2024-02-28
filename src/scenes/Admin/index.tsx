import withRouter from "@/components/Layout/Router/withRouter";
import { faArrowUp, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "antd";
import React from "react";

const Dashboard = () => {
  return (
    <Col className="mx-auto min-h-full h-full md:p-6 2xl:p-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-[1.875rem]">
        {/* Card Item */}
        <div className="rounded-sm border bg-white px-[30px] py-6 shadow-md">
          <div className="flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-gray-100">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="font-bold text-black text-2xl leading-9">3 VND</h4>
              <span className="text-sm font-medium">Total Profit</span>
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-meta">
              0.43%
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default withRouter(Dashboard);
