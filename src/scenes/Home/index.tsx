import "./index.css";
import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";
import { Col, Row, Typography } from "antd";
import ProductStore from "@/stores/productStore";
import withRouter from "@/components/Layout/Router/withRouter";
import { useEffect } from "react";
import Product from "./components/Product";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { appLayouts } from "@/components/Layout/Router/router.config";
const { Title } = Typography;
interface IProps {
  navigate: any;
  productStore: ProductStore;
}
const Home = inject(Stores.ProductStore)(
  observer((props: IProps) => {
    const { navigate, productStore } = props;
    useEffect(() => {
      const init = async () => {
        await productStore.getAll(1, 10);
        await productStore.getHomeProducts();
      };
      init();
    }, []);

    const handleShowProducts = async (categoryId: number) => {
      console.log(categoryId);
    };

    const handleProductClick = (productId: number) => {
      navigate(`/${appLayouts.detail.path.replace(":id", productId)}`);
    };

    return (
      <Col>
        <Row className="banner"></Row>
        <Row className="px-3 py-3">
          {productStore.homeProducts &&
            Object.keys(productStore.homeProducts)?.map((categoryKey: any) => (
              <Col key={categoryKey} className="w-full">
                <Row className="px-2 py-1 justify-between">
                  <Title level={2}>{categoryKey}</Title>
                  <MenuUnfoldOutlined
                    style={{ fontSize: "32px" }}
                    onClick={() =>
                      navigate(
                        `/${appLayouts.collection.path.replace(
                          ":categoryName",
                          productStore.homeProducts[
                            categoryKey
                          ][0].categoryName.toLowerCase()
                        )}`
                      )
                    }
                  />
                </Row>
                <Row className="flex-wrap">
                  {productStore.homeProducts[categoryKey].map((pro: any) => {
                    const data = {
                      image: pro.image,
                      productName: pro.productName,
                      productPrice: pro.price,
                      productId: pro.productId,
                    };

                    return (
                      <Product
                        key={pro.productId}
                        data={data}
                        onClick={handleProductClick}
                      />
                    );
                  })}
                </Row>
              </Col>
            ))}
        </Row>
        <Row></Row>
      </Col>
    );
  })
);

export default withRouter(Home);
