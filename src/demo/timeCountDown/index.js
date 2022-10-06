import { useRef, useState } from "react";
import LearnWrapper from "../../components/learnWrapper";
import TimeCountDown from "./timeCountDown";
import style from "./index.module.scss";

function Index() {
  const inputRef = useRef();
  const [state, setState] = useState(new Date().getTime() + 30000);
  const [text, setText] = useState("");

  function onSet() {
    const value = inputRef.current.value;
    setState(value);
    setText("");
  }

  function onEnd() {
    setText("结束了");
  }

  return (
    <LearnWrapper>
      <section className={`${style.timeCountDown} page`}>
        <input ref={inputRef} defaultValue="2022-8-23 20:51:23" />
        <button
          onClick={() => {
            onSet();
          }}
        >
          确认
        </button>
        <p>倒计时</p>
        <TimeCountDown onEnd={onEnd} time={state} />
        <p>{text}</p>
      </section>
    </LearnWrapper>
  );
}

export default Index;
