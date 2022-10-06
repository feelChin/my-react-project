import { useState, useEffect } from "react";
import LearnWrapper from "../../components/learnWrapper";
import Websocket from "./websocket";
import style from "./index.module.scss";

function Index() {
  return (
    <LearnWrapper>
      <section className={`${style.websocket} page`}>
        <Websocket />
      </section>
    </LearnWrapper>
  );
}

export default Index;
