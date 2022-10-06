import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.scss";

function IntersectionObserverScroll(props) {
  const { hasMore, page, list, setParams, maxPage } = props;
  const loadingRef = useRef(null);
  let number = page;
  useEffect(() => {
    let ob;

    if (loadingRef.current) {
      ob = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (number > maxPage - 1) ob.disconnect();
          number += 1;
          setParams(number);
        }
      });
      ob.observe(loadingRef.current);
    }
    return () => {
      ob && ob.disconnect();
    };
  }, []);
  return (
    <>
      {list()}
      <div className={style.loading}>
        {hasMore ? (
          <div ref={loadingRef}>加载中...</div>
        ) : (
          <div>没有数据了...</div>
        )}
      </div>
    </>
  );
}

export default React.memo(IntersectionObserverScroll);
