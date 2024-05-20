import React, { useEffect, useRef } from "react";
import {
  Layout,
  Row,
  Col,
  Input,
  Badge,
  Dropdown,
  Menu,
  Form,
  Button,
} from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { headerMenuDropdown } from "@/utils/appConfig";
import MenuDropdown from "./Dropdown";
import "@/components/Layout/Header/index.css";
import {
  BellOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";
import OrderStore from "@/stores/orderStore";
import withRouter from "../Router/withRouter";
import { appLayouts } from "../Router/router.config";
import AuthenticationStore from "@/stores/authenticationStore";

interface IProps {
  navigate: any;
  orderStore: OrderStore;
  authenticationStore: AuthenticationStore;
}

const UserHeaderLayout = inject(
  Stores.OrderStore,
  Stores.AuthenticationStore
)(
  observer((props: IProps) => {
    const { navigate, orderStore, authenticationStore } = props;
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

    useEffect(() => {
      orderStore.getCart();
    }, []);

    const onFinish = async (values: any) => {
      navigate(`${appLayouts.search.path}?q=${values.q}&scat_id=`);
    };

    return (
      <>
        <Layout.Header className="bg-white opacity-85 container min-w-full">
          <Row>
            <Col span={12}>
              <Row>
                <Col span={4} className="flex items-center justify-center">
                  <img
                    style={{ width: "40px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg"
                    className="cursor-pointer"
                    onClick={() => props.navigate(appLayouts.home.path)}
                  />
                </Col>
                <Col span={20}>
                  <Row className="gap-4">
                    <Link
                      to={`/${appLayouts.collection.path.replace(
                        ":categoryName",
                        "milwaukee"
                      )}`}
                      className="font-medium my-link"
                    >
                      Milwaukee
                    </Link>
                    <Link
                      to={`/${appLayouts.collection.path.replace(
                        ":categoryName",
                        "makita"
                      )}`}
                      className="font-medium my-link"
                    >
                      Makita
                    </Link>
                    <Link
                      to={`/${appLayouts.collection.path.replace(
                        ":categoryName",
                        "dewalt"
                      )}`}
                      className="font-medium my-link"
                    >
                      Dewalt
                    </Link>
                    <Link
                      to={""}
                      className="font-medium my-link menu"
                      onMouseOver={onShowMenu}
                      onMouseLeave={onCloseMenu}
                    >
                      Hãng
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
                  <Row className="flex justify-center items-center h-full">
                    <Form
                      onFinish={onFinish}
                      className="w-full flex items-center"
                    >
                      <div className="relative m-0 w-full">
                        <Form.Item name="q" className="relative m-0">
                          <Input placeholder="Tìm kiếm...." />
                        </Form.Item>
                        <Form.Item className="absolute right-0 top-0 h-full">
                          <Button
                            htmlType="submit"
                            className="bg-transparent border-none"
                            style={{ boxShadow: "none" }}
                          >
                            <SearchOutlined className="text-gray-500" />
                          </Button>
                        </Form.Item>
                      </div>
                    </Form>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row className="gap-1">
                    <BellOutlined style={{ fontSize: "24px" }} />
                    <Dropdown
                      trigger={["hover", "click"]}
                      overlay={
                        <Menu>
                          <Menu.Item key={Math.random()}>PROFILE</Menu.Item>
                          <Menu.Item key={Math.random()}>PURCHASE</Menu.Item>
                          {authenticationStore?.isAuthenticated ? (
                            <Menu.Item
                              id="logout"
                              onClick={authenticationStore.logout}
                            >
                              LOG OUT
                            </Menu.Item>
                          ) : (
                            <Menu.Item onClick={() => navigate("/auth/login")}>
                              LOGIN
                            </Menu.Item>
                          )}
                        </Menu>
                      }
                    >
                      <UserOutlined
                        id="user-icon"
                        style={{ fontSize: "24px" }}
                      />
                    </Dropdown>
                    <Badge count={orderStore.shoppingCart.length}>
                      <ShoppingCartOutlined
                        style={{ fontSize: "24px" }}
                        onClick={() => props.navigate(appLayouts.cart.path)}
                      />
                    </Badge>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Layout.Header>
        <MenuDropdown ref={menuRef} items={headerMenuDropdown} />
      </>
    );
  })
);

export default withRouter(UserHeaderLayout);
