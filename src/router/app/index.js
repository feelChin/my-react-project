const app_router = [
  {
    path: "/",
    element: () => import("../../pages/nav"),
    children: [
      {
        path: "/",
        name: "首页",
        element: () => import("../../pages/home"),
      },
      {
        auth: true,
        path: "/learn",
        name: "学习",
        element: () => import("../../pages/learn"),
      },
      {
        path: "/mine",
        name: "我的",
        element: () => import("../../pages/mine"),
      },
    ],
  },
];

export default app_router;
