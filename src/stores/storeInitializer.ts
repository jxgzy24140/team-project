import AuthenticationStore from "@/stores/authenticationStore";
import ProductStore from "@/stores/productStore";
import CategoryStore from "@/stores/categoryStore";
import RatingStore from "@/stores/ratingStore";
import PaymentStore from "@/stores/paymentStore";
import OrderStore from "@/stores/orderStore";
import AccountStore from "@/stores/accountStore";
import BrandStore from "./brandStore";

export default function initializeStores() {
  return {
    authenticationStore: new AuthenticationStore(),
    accountStore: new AccountStore(),
    productStore: new ProductStore(),
    categoryStore: new CategoryStore(),
    brandStore: new BrandStore(),
    orderStore: new OrderStore(),
    paymentStore: new PaymentStore(),
    ratingStore: new RatingStore(),
  };
}
