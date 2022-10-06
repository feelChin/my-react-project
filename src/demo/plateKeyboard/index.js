import { useState, useEffect } from "react";
import LearnWrapper from "../../components/learnWrapper";
import PlateKeyboard from "./plateKeyboard";
import style from "./index.module.scss";

function Index() {
  return (
    <LearnWrapper>
      <section className={`${style.plateKeyboardWrapper} page`}>
        <PlateKeyboard />
      </section>
    </LearnWrapper>
  );
}

export default Index;
