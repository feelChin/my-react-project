import app_router from "./app";
import demo_router from "./demo";

const routes = [
  ...app_router,
  ...demo_router,
  {
    path: "/login",
    element: () => import("../pages/login"),
  },
  {
    auth: true,
    path: "/404",
    element: <>404</>,
  },
];

export default routes;
