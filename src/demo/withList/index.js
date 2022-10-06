import { useState, useEffect } from "react";
import LearnWrapper from "../../components/learnWrapper";
import WithDemo from "./withDemo";
import { initQueue, isFirstrenderFlase } from "./initQueue.js";
import style from "./index.module.scss";

function Index() {
  const [state, setState] = useState([]);
  const [init, setInit] = useState(false);

  useEffect(() => {
    setState([...new Array(50).keys()]);

    if (!init) {
      initQueue();
      isFirstrenderFlase();
      setInit(true);
    }
  }, []);

  return (
    <LearnWrapper>
      <section className={`${style.pageItem} page`}>
        {init &&
          state.map((item, index) => (
            <WithDemo key={index}>列表{index + 1}</WithDemo>
          ))}
      </section>
    </LearnWrapper>
  );
}

export default Index;
