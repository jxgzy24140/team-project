import Filter from "@/components/Filter";
import { appLayouts } from "@/components/Layout/Router/router.config";
import withRouter from "@/components/Layout/Router/withRouter";
import OrderStore from "@/stores/orderStore";
import ProductStore from "@/stores/productStore";
import Stores from "@/stores/storeIdentifier";
import { getQuery } from "@/utils/helpers";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { inject, observer } from "mobx-react";
import React, { useEffect } from "react";

interface IProps {
  navigate: any;
  productStore: ProductStore;
  orderStore: OrderStore;
}

const SearchResultPage = inject(
  Stores.ProductStore,
  Stores.OrderStore
)(
  observer((props: IProps) => {
    const { productStore, orderStore, navigate } = props;

    useEffect(() => {
      const getSearch = async () => {
        const q = getQuery("q");
        const cateId = getQuery("scat_id");
        const minPrice = getQuery("min");
        const maxPrice = getQuery("max");
        const sort = getQuery("sort");

        await productStore.searchProduct(q, cateId, minPrice, maxPrice, sort);
      };

      getSearch();
    }, [window.location.href]);

    const onPriceChange = (e: any) => {
      const value = e.target.value.split(" ");
      const minPrice = value[0];
      const maxPrice = value[1];
      const searchParams = new URLSearchParams(window.location.search);
      if (minPrice && maxPrice === "0") {
        searchParams.set("min", minPrice);
        searchParams.set("max", "");
      } else if (minPrice !== "0" && maxPrice !== "0") {
        searchParams.set("min", minPrice);
        searchParams.set("max", maxPrice);
      } else if (minPrice === "0" && maxPrice) {
        searchParams.set("min", "");
        searchParams.set("max", maxPrice);
      }

      const newURL = `${window.location.origin}${
        window.location.pathname
      }?${searchParams.toString()}`;
      window.location.href = newURL;
    };

    const onSortedChange = (e: any) => {
      const value = e.target.value;
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("sort", value);
      const newURL = `${window.location.origin}${
        window.location.pathname
      }?${searchParams.toString()}`;
      window.location.href = newURL;
    };

    return (
      <>
        <Filter onPriceChange={onPriceChange} onSortedChange={onSortedChange} />
        <Row className="flex-wrap m-2">
          {productStore?.productSearchResult?.map((product: any) => {
            return (
              <Col className="w-1/5 p-2">
                <div className="border border-gray-300 p-2">
                  <img
                    src={product.image}
                    className="w-[350px]"
                    alt=""
                    onClick={() =>
                      navigate(
                        `/${appLayouts.detail.path.replace(
                          ":id",
                          product.productId
                        )}`
                      )
                    }
                  />
                  <h3
                    className="text-base font-semibold mt-2"
                    onClick={() =>
                      navigate(
                        `/${appLayouts.detail.path.replace(
                          ":id",
                          product.productId
                        )}`
                      )
                    }
                  >
                    {product.productName}
                  </h3>
                  <p className="text-red-600">{product.price} đ</p>
                  <Button
                    className="flex justify-center items-center text-red-500 mx-auto"
                    onClick={() => {
                      orderStore.addToCart({
                        productId: product.productId,
                        productCode: product.productCode,
                        productName: product.productName,
                        quantity: 1,
                        price: product.price,
                      });
                      navigate(`/${appLayouts.cart.path}`);
                    }}
                  >
                    <ShoppingCartOutlined />
                    ĐẶT HÀNG
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </>
    );
  })
);

export default withRouter(SearchResultPage);
