import { useState, useEffect } from "react";
import LearnWrapper from "../../components/learnWrapper";
import ShoppingCart from "./shoppingCart";
import style from "./index.module.scss";

function Index() {
  return (
    <LearnWrapper>
      <section className={`${style.shoppingCart} page`}>
        <ShoppingCart />
      </section>
    </LearnWrapper>
  );
}

export default Index;
