import { useState, useEffect } from "react";
import LearnWrapper from "../../components/learnWrapper";
import TheQuest from "./theQuest";
import style from "./index.module.scss";

function Index() {
  return (
    <LearnWrapper>
      <section className={`${style.theQuest} page`}>
        <TheQuest />
      </section>
    </LearnWrapper>
  );
}

export default Index;
