import { Col, Row } from "antd";
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { appLayouts } from "../../Router/router.config";
interface Items {
  id: number;
  heading: string;
  children: any[];
}

interface IProps {
  items: Items[];
}

const MenuDropdown = (props: IProps, ref: any) => {
  return (
    <Col
      ref={ref}
      className="w-100 flex px-12 py-6 menu-list z-50"
      style={{ backgroundColor: "white", opacity: 0.7 }}
    >
      <Row className="w-100 flex">
        {props.items.map((item: any, index) => {
          if (item.children) {
            return (
              <Col className="px-2" key={index}>
                <Link
                  className="text-black font-bold text-sm py-1 block my-link"
                  to={`/${appLayouts.collection.path.replace(
                    ":categoryName",
                    item.heading.toLowerCase()
                  )}`}
                >
                  {item.heading}
                </Link>
                {item.children.map((child: any, index) => {
                  return (
                    <Link
                      key={index}
                      className="text-gray-400 leading-none py-2 block my-link"
                      to={`/${appLayouts.collection.path.replace(
                        ":categoryName",
                        item.heading.toLowerCase()
                      )}?scat=${child.toLowerCase()}`}
                    >
                      {child}
                    </Link>
                  );
                })}
              </Col>
            );
          }
          return (
            <Col className="px-2" key={index}>
              <Link
                className="text-black py-1 block my-link"
                to={`/${appLayouts.collection.path.replace(
                  ":categoryName",
                  item.heading.toLowerCase()
                )}`}
                style={{ textDecoration: "underline" }}
              >
                {item.heading}
              </Link>
            </Col>
          );
        })}
      </Row>
    </Col>
  );
};

export default forwardRef(MenuDropdown);
