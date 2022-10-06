import { useState, useEffect } from "react";
import LearnWrapper from "../../components/learnWrapper";
import VerificationCode from "./verificationCode";
import style from "./index.module.scss";

function Index() {
  return (
    <LearnWrapper>
      <section className={`${style.verificationCode} page`}>
        <VerificationCode />
      </section>
    </LearnWrapper>
  );
}

export default Index;
