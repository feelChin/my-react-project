import { useState, useEffect } from "react";
import LearnWrapper from "../../components/learnWrapper";
import TableAddAndRemove from "./tableAddAndRemove";
import style from "./index.module.scss";

function Index() {
  return (
    <LearnWrapper>
      <section className={`${style.tableAddAndRemove} page`}>
        <TableAddAndRemove />
      </section>
    </LearnWrapper>
  );
}

export default Index;
