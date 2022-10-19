import React from "react";
import HomeGame from "../../components/homeGame";
import style from "./index.module.scss";
import useTitle from "../../hooks/useTitle";

function Home() {
  useTitle("首页");
  return (
    <section className={`${style.home} page`}>
      <HomeGame />
    </section>
  );
}

export default Home;
