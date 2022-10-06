import { useState, useEffect } from "react";
import LearnWrapper from "../../components/learnWrapper";
import Portal from "./portal";
import style from "./index.module.scss";

function Index() {
  const [show, setShow] = useState(false);

  return (
    <LearnWrapper>
      <section className={`${style.portal} page`}>
        {show && (
          <Portal>
            <section
              className={style.portalBack}
              onClick={() => {
                setShow(false);
              }}
            ></section>
            <section className={style.portalInner}>
              <header>使用React Portal实现弹窗功能</header>
            </section>
          </Portal>
        )}
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          点击弹出
        </button>
      </section>
    </LearnWrapper>
  );
}

export default Index;
