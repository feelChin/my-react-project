const demo_router = [
  {
    path: "/timeCountDown",
    element: () => import("../../demo/timeCountDown"),
  },
  {
    path: "/verificationCode",
    element: () => import("../../demo/verificationCode"),
  },
  {
    path: "/intersectionObserverScrollList",
    element: () => import("../../demo/intersectionObserverScrollList"),
  },
  {
    path: "/message",
    element: () => import("../../demo/message"),
  },
  {
    path: "/withList",
    element: () => import("../../demo/withList"),
  },
  {
    path: "/plateKeyboard",
    element: () => import("../../demo/plateKeyboard"),
  },
  {
    path: "/theQuest",
    element: () => import("../../demo/theQuest"),
  },
  {
    path: "/tableAddAndRemove",
    element: () => import("../../demo/tableAddAndRemove"),
  },
  {
    path: "/websocket",
    element: () => import("../../demo/websocket"),
  },
  {
    path: "/portal",
    element: () => import("../../demo/portal"),
  },
];
export default demo_router;
