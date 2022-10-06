import { useCallback, useRef } from "react";

const useDebounce = (fn, delay = 100) => {
  const time = useRef();

  return useCallback(
    (...args) => {
      if (time.current) {
        clearTimeout(time.current);
      }
      time.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [delay]
  );
};

export default useDebounce;
