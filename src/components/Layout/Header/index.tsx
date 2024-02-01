import React, { useRef } from "react";
import { Layout, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Icon from "@/components/Layout/Icon";
import { headerMenuDropdown } from "@/utils/appConfig";
import Dropdown from "./Dropdown";
import "@/components/Layout/Header/index.css";

const Header = () => {
  const menuRef: any = useRef(null);
  const onShowMenu = () => {
    const menuList: any = document.querySelector(".menu-list");

    menuList.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    menuList.style.display = "block";
    menuList.style.visibility = "visible";
    menuList.style.opacity = "0";

    void menuList.offsetWidth;

    menuList.style.transform = "translateY(0)";
    menuList.style.opacity = "1";
  };

  const onCloseMenu = () => {
    const menuList: any = document.querySelector(".menu-list");
    menuList.style.removeProperty("transform");
    menuList.style.removeProperty("transition");
    menuList.style.removeProperty("display");
    menuList.style.removeProperty("visibility");
    menuList.style.removeProperty("opacity");
  };
  return (
    <>
      <Layout.Header className="bg-white opacity-85 container">
        <Row>
          <Col span={12}>
            <Row>
              <Col span={4} className="flex items-center justify-center">
                <img
                  style={{ width: "40px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg"
                />
              </Col>
              <Col span={20}>
                <Row className="gap-4">
                  <Link to={""} className="font-medium my-link">
                    Bánh ngọt
                  </Link>
                  <Link to={""} className="font-medium my-link">
                    Trà
                  </Link>
                  <Link to={""} className="font-medium my-link">
                    Cà phê
                  </Link>
                  <Link
                    to={""}
                    className="font-medium my-link menu"
                    onMouseOver={onShowMenu}
                    onMouseLeave={onCloseMenu}
                  >
                    Menu
                    <FontAwesomeIcon icon={faCaretDown} className="pl-2" />
                  </Link>
                  <Link to={""} className="font-medium my-link">
                    Về chúng tôi
                  </Link>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row className="flex items-center h-full">
              <Col span={18} className="px-2">
                <Row className="flex items-center h-full">
                  <Input placeholder="Tìm kiếm...." />
                </Row>
              </Col>
              <Col span={6}>
                <Row className="gap-1">
                  <Icon
                    img={
                      "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg"
                    }
                  />
                  <Icon
                    img={
                      "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg"
                    }
                  />
                  <Icon
                    img={
                      "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg"
                    }
                  />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout.Header>
      <Dropdown ref={menuRef} items={headerMenuDropdown} />
    </>
  );
};

export default Header;
