import AuthenticationStore from "@/stores/authenticationStore";
export default function initializeStores() {
  return {
    authenticationStore: new AuthenticationStore(),
  };
}
