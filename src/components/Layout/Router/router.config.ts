import { lazy } from "react";

export const appLayout: any = [
  {
    path: "/login",
    component: lazy(() => import("@/scenes/Account/Login")),
  },
  {
    path: "/register",
    component: lazy(() => import("@/scenes/Account/Register")),
  },
];

export const adminLayout: any = [
  {
    path: "/dashboard",
    component: lazy(() => import("@/scenes/Admin")),
  },
];
