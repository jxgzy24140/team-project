import { lazy } from "react";
export const adminLayouts: any = {
  accounts: {
    path: "accounts",
    component: lazy(() => import("@/scenes/Admin/Account")),
  },
  products: {
    path: "products",
    component: lazy(() => import("@/scenes/Admin/Product")),
  },
  product: {
    path: "products/:id",
    component: lazy(() => import("@/scenes/Admin/Product/Edit")),
  },
};

export const appLayouts: any = {
  home: {
    path: "home",
    component: lazy(() => import("@/scenes/Home")),
  },
};

export const authLayouts: any = {
  login: {
    path: "login",
    component: lazy(() => import("@/scenes/Account/Login")),
  },
  register: {
    path: "register",
    component: lazy(() => import("@/scenes/Account/Register")),
  },
};
