import { useState, useRef } from "react";
import useDebounce from "../../hooks/useDebounce";
import style from "./index.module.scss";

let inputValue;
function Index(props) {
  const { value, setValue } = props;
  const inputRef = useRef();
  const runSearch = useDebounce(changeValue, 500);

  const [showModal, setShowModal] = useState(false);

  function changeValue() {
    setValue(inputValue);
  }

  function deleteValue() {
    inputRef.current.value = "";
    setValue("");
  }

  function handleClick() {
    setShowModal(!showModal);
  }

  return (
    <div className={style.learnHead}>
      <div className={style.learnHeadInput}>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => {
            inputValue = e.target.value;
            runSearch();
          }}
        />
        {value && (
          <i
            onClick={() => {
              deleteValue();
            }}
            className="iconfont icon-cuowu"
          ></i>
        )}
      </div>
      <div
        onClick={() => {
          handleClick();
        }}
        className={`${style.learnHeadMenu} ${showModal ? "active" : ""}`}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* {showModal && (
        <div className={style.learnHeadModal}>
          <div className={style.learnHeadModalContent}></div>
        </div>
      )} */}
    </div>
  );
}

export default Index;
