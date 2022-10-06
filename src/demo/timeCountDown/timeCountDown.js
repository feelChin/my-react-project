import React, { useEffect, useState } from "react";

function fixedZero(value) {
  return value < 10 ? `0${value}` : value;
}

const initTime = (value) => {
  let targetTime;

  if (Object.prototype.toString.call(value) === "[object Date]") {
    targetTime = value.getTime();
  } else {
    targetTime = new Date(value).getTime();
  }

  const count = targetTime - new Date().getTime();

  return count > 0 ? count : 0;
};

function TimeCountDown(props) {
  let timer;
  const interval = 1000;

  const { time, onEnd } = props;
  const [lastTime, setLasttime] = useState(initTime(time));

  useEffect(() => {
    setLasttime(initTime(time));
  }, [time]);

  function defaultFormat(time) {
    const hours = 60 * 60 * 1000;
    const minutes = 60 * 1000;

    const h = Math.floor(time / hours);
    const m = Math.floor((time - h * hours) / minutes);
    const s = Math.floor((time - h * hours - m * minutes) / 1000);
    return (
      <span>
        {fixedZero(h)}:{fixedZero(m)}:{fixedZero(s)}
      </span>
    );
  }

  useEffect(() => {
    if (lastTime < interval) {
      setLasttime(0);
      onEnd();
      return;
    }

    timer = setTimeout(() => {
      setLasttime(lastTime - interval);
    }, interval);

    return () => {
      clearTimeout(timer);
    };
  }, [lastTime]);

  return (
    <section className="timeCountDown">
      {lastTime ? defaultFormat(lastTime) : ""}
    </section>
  );
}

export default React.memo(TimeCountDown);
