import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import app_router from "../../router/app";
import style from "./index.module.scss";

function Nav() {
  function renderNav() {
    return app_router[0].children.map((item) => (
      <NavLink
        key={item.path}
        className={({ isActive }) =>
          isActive ? `${style.item} active` : `${style.item}`
        }
        to={item.path}
      >
        {item.name}
      </NavLink>
    ));
  }

  return (
    <>
      <div className={style.navList}>{renderNav()}</div>
      <Outlet />
    </>
  );
}

export default Nav;
