import { useState, useRef } from "react";
import useDebounce from "../../hooks/useDebounce";
import style from "./index.module.scss";

function Index(props) {
  const { value, setValue } = props;
  const inputRef = useRef();
  const [inputValue,setInputValue] = useState('')
  const [showModal, setShowModal] = useState(false);

   useDebounce(() => {
    changeValue(inputValue)
  }, 300, [inputValue])


  function changeValue(value) {
    setValue(value);
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
            setInputValue(e.target.value);
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
