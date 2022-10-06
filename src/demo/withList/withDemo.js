import { useState, useEffect } from "react";
import { renderQueue, isFirstrender, isFirstrenderTrue } from "./initQueue.js";
import style from "./index.module.scss";

const tryRender = () => {
  const render = renderQueue.shift();
  if (!render) return;
  setTimeout(() => {
    render();
  }, 150);
};

function classHOC(WrapComponent) {
  return function Index(props) {
    const [isRender, setRender] = useState(false);
    useEffect(() => {
      renderQueue.push(() => {
        setRender(true);
      });
      if (!isFirstrender) {
        tryRender();
        isFirstrenderTrue();
      }
    }, []);
    return isRender ? (
      <WrapComponent tryRender={tryRender} {...props} />
    ) : (
      <div className={style.item}>
        <span>加载中...</span>
      </div>
    );
  };
}

function Demo(props) {
  const { children, tryRender } = props;
  tryRender();
  return <section className={style.item}>{children}</section>;
}

export default classHOC(Demo);
