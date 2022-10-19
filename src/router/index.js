import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
import RequireAuth from "../utils/useRootContext/requireAuth";
import routes from "./router";

function LazyElement(props) {
  const { importFunc, isAuth } = props;
  const LazyComponent = lazy(importFunc);
  return (
    <Suspense
      fallback={
        <div className="folding-wrapper">
          <div class="sk-folding-cube">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
          </div>
        </div>
      }
    >
      {isAuth ? (
        <RequireAuth>
          <LazyComponent />
        </RequireAuth>
      ) : (
        <LazyComponent />
      )}
    </Suspense>
  );
}

function dealRoutes(routesArr) {
  if (routesArr && Array.isArray(routesArr) && routesArr.length > 0) {
    routesArr.forEach((route) => {
      if (route.element && typeof route.element == "function") {
        const importFunc = route.element;
        route.element = (
          <LazyElement isAuth={route.auth || ""} importFunc={importFunc} />
        );
      }
      if (route.children) {
        dealRoutes(route.children);
      }
    });
  }
}
dealRoutes(routes);

const Routes = () => useRoutes(routes);

export default Routes;
