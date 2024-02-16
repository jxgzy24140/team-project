import AuthenticationStore from "@/stores/authenticationStore";
import ProductStore from "@/stores/productStore";
import CategoryStore from "@/stores/categoryStore";
import RatingStore from "@/stores/ratingStore";
import PaymentStore from "@/stores/paymentStore";
import OrderStore from "@/stores/orderStore";

export default function initializeStores() {
  return {
    authenticationStore: new AuthenticationStore(),
    productStore: new ProductStore(),
    categoryStore: new CategoryStore(),
    orderStore: new OrderStore(),
    paymentStore: new PaymentStore(),
    ratingStore: new RatingStore(),
  };
}