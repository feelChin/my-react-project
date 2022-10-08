import { useRef } from "react";

const useThrottle = (fn, delay = 300) => {
  const time = useRef();

  return (...args) => {
    if (time.current) {
      return;
    }
    time.current = setTimeout(() => {
      fn(...args);
      time.current = null;
    }, delay);
  };
};

export default useThrottle;
