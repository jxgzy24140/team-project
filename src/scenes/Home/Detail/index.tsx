import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";
import withRouter from "@/components/Layout/Router/withRouter";
import ProductStore from "@/stores/productStore";
import {
  Row,
  Col,
  Typography,
  Button,
  InputNumber,
  Rate,
  Pagination,
} from "antd";
import { useEffect, useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import OrderStore from "@/stores/orderStore";
import { localeData, weekdays } from "moment";
import dayjs from "dayjs";
import RatingStore from "@/stores/ratingStore";
dayjs.extend(weekdays);
dayjs.extend(localeData);

const { Title } = Typography;

interface IProps {
  navigate: any;
  productStore: ProductStore;
  orderStore: OrderStore;
  ratingStore: RatingStore;
  params: any;
}
const Detail = inject(
  Stores.ProductStore,
  Stores.OrderStore,
  Stores.RatingStore
)(
  observer((props: IProps) => {
    const [quantity, setQuantity] = useState(1);
    const { productStore, orderStore, ratingStore, params } = props;
    const { editProduct } = productStore;
    const { id } = params;
    const [ratingCount, setRatingCount] = useState<any>();
    const [filterdRatings, setFilteredRatings] = useState<any>();

    useEffect(() => {
      const init = async () => {
        await productStore.get(id);
        // await ratingStore.getRatingsForProduct(id, 1, 10);
        await handleGetRatings();
      };
      init();
    }, []);

    const handleAddToCart = () => {
      const input = {
        productId: productStore.editProduct.productId,
        productName: productStore.editProduct.productName,
        productCode: productStore.editProduct.productCode,
        price: productStore.editProduct.price,
        quantity: quantity,
      };
      orderStore.addToCart(input);
    };

    const handleBuyProduct = async () => {};

    const handleGetRatings = async () => {
      await ratingStore.getRatingsForProduct(id, 1, 10);
      const initRatings: any = {};
      // ratingStore.ratings.items = ratingStore.ratings.items.sort(
      //   (a, b) => b.stars - a.stars
      // );
      for (let i = 5; i >= 1; i--) {
        initRatings[i] = ratingStore.ratings.items.filter(
          (rating: any) => rating.stars === i
        );
      }
      setRatingCount(initRatings);
      let ratingList: any = [];
      Object.keys(initRatings).map((key: any) => {
        if (initRatings[key]) {
          ratingList = [...ratingList, ...initRatings[key]];
        }
      });
      setFilteredRatings(ratingList);
    };

    const handleFilterRating = async (star: any) => {
      if (star == 0) {
        await handleGetRatings();
      } else {
        const filteredRating = ratingStore.ratings.items.filter(
          (x) => x.stars == star
        );
        setFilteredRatings(filteredRating);
      }
    };

    return (
      editProduct && (
        <Col className="px-4 py-2 ">
          <div className="py-2">
            Menu / Sản Phẩm / {editProduct.productName}
          </div>
          <Row>
            <Col className="bg-[#FFF3D7]">
              <img src={editProduct.image} className="w-[400px] h-[400px]" />
            </Col>
            <Col className="flex flex-1 flex-col gap-3 px-3">
              <Row className="gap-1 flex-col">
                <p className="text-3xl text-black text-left">
                  {editProduct.productName}
                </p>
                <p className="text-sm text-black text-left">
                  {editProduct.price} đ
                </p>
              </Row>
              <Row className="flex flex-wrap justify-start items-center">
                <Title level={3} className="font-bold">
                  Mã sản phẩm:
                </Title>
                <p className="text-xl font-semibold">
                  {editProduct.productCode}
                </p>
              </Row>
              <Row className="flex flex-wrap justify-start items-center">
                <Title level={3} className="font-bold">
                  Tình trạng:
                </Title>
                <p className="text-xl font-semibold ">
                  {editProduct.quantity > 0 ? "Còn hàng" : "Hết hàng"}
                </p>
              </Row>
              <Row className="flex justify-start items-start">
                <Title level={5} className="font-bold">
                  {editProduct.description}
                </Title>
              </Row>
              <Row className="gap-2 justify-start items-center">
                <Title level={3} className="font-bold ">
                  Số lượng:
                </Title>
                <Button
                  className="w-[40px] h-[40px] flex justify-center items-center"
                  onClick={() => setQuantity((x) => (x > 1 ? x - 1 : x))}
                >
                  <MinusOutlined />
                </Button>
                <InputNumber
                  min={1}
                  max={editProduct.quantity}
                  defaultValue={quantity}
                  value={quantity}
                  onChange={(value: any) =>
                    setQuantity((x) =>
                      value > 0 && value <= editProduct.quantity ? value : x
                    )
                  }
                  className="w-[60px] h-[40px] flex justify-center items-center"
                />
                <Button
                  className="w-[40px] h-[40px] flex justify-center items-center"
                  onClick={() =>
                    setQuantity((x) => (x < editProduct.quantity ? x + 1 : x))
                  }
                >
                  <PlusOutlined />
                </Button>
              </Row>
              <Row className="gap-y-2">
                <Button
                  className="w-1/2 text-center text-white bg-[#FFAC00]"
                  onClick={handleAddToCart}
                >
                  Thêm vào giỏ hàng
                </Button>
                <Button
                  className="w-1/2 text-center text-white bg-[#FFAC00]"
                  onClick={handleBuyProduct}
                >
                  Đặt hàng ngay
                </Button>
              </Row>
            </Col>
          </Row>
          <Col className="p-2">
            <h2>ĐÁNH GIÁ SẢN PHẨM</h2>
            <Row className="mt-2 ">
              <Col className="flex flex-wrap gap-2">
                <Button
                  onClick={() => handleFilterRating(0)}
                  className="flex justify-center items-center px-3 py-1 text-black bg-white"
                >
                  Tất Cả
                </Button>
                {ratingCount &&
                  Object.keys(ratingCount).map((key: any) => {
                    return (
                      <Button
                        onClick={() => handleFilterRating(key)}
                        className="flex justify-center items-center px-3 py-1 text-black bg-white"
                      >
                        {key} Sao ({ratingCount[key].length ?? 0})
                      </Button>
                    );
                  })}
              </Col>
            </Row>

            {filterdRatings?.map((rating: any) => (
              <Row className="p-2 gap-2" key={rating.ratingId}>
                <Col>
                  <img src={rating.avatar} alt="" className="w-[40px]" />
                </Col>
                <Col className="flex flex-col gap-2">
                  <Row>{rating.userName}</Row>
                  <Row>
                    <Rate value={rating.stars} disabled />
                  </Row>
                  <Row>
                    {dayjs(rating.createdDate).format("YYYY-MM-DD HH:mm:ss")}
                  </Row>
                  <Row>{rating.ratingText}</Row>
                </Col>
              </Row>
            ))}

            <Row className="justify-end items-center p-3">
              <Pagination
                defaultCurrent={1}
                total={filterdRatings?.length}
                pageSize={5}
              />
            </Row>
          </Col>
        </Col>
      )
    );
  })
);

export default withRouter(Detail);
