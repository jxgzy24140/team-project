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
    path: "/admin",
    component: lazy(() => import("@/scenes/Admin")),
  },
];

export const appLayout: any = [
  {
    path: "/home",
    component: lazy(() => import("@/scenes/Account/Register")),
  },
];
