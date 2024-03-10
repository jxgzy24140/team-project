import { lazy } from "react";
export const userLayout: any = [
  {
    path: "/login",
    component: lazy(() => import("@/scenes/Account/Login")),
  },
  {
    path: "/register",
    component: lazy(() => import("@/scenes/Account/Register")),
  },
  {
    path: "/home",
    component: lazy(() => import("@/scenes/Admin/Home")),
  },
  {
    path: "/userlist",
    component: lazy(() => import("@/scenes/Admin/Account/UserAccount")),
  },
  {
    path: "/adminlist",
    component: lazy(() => import("@/scenes/Admin/Account/AdminAccount")),
  },
  {
    path: "/product",
    component: lazy(() => import("@/scenes/Admin/Product")),
  },
  {
    path: "/productedit",
    component: lazy(() => import("@/scenes/Admin/Edit")),
  },
];

export const appLayout: any = [
  {
    path: "/home",
    component: lazy(() => import("@/scenes/Account/Register")),
  },
];
