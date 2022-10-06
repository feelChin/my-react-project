import React, { useState, useRef, useEffect } from "react";
import style from "./index.module.scss";

const VerificationCode = (props) => {
  const [codeArray, setCodeArray] = useState(new Array(6).fill(""));
  const [codeArrayIndex, setCodeArrayIndex] = useState(0);
  const inputRef = useRef(null);

  // 输入框change
  const hanldeInputCodeChange = (e) => {
    if (codeArrayIndex === 6) return;
    const value = e.target.value;
    codeArray[codeArrayIndex] = value;
    setCodeArray([...codeArray]);
    setCodeArrayIndex(codeArrayIndex + 1);
  };

  const handleNumberItemClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    if (codeArrayIndex === 6) {
      setTimeout(() => {
        alert("验证成功");
      }, 1000);
    }
  }, [codeArrayIndex]);

  return (
    <>
      <div className={style.verificationCodeWrapper}>
        <div className={style.verificationCodeWrapperBox}>
          <h5>请输入验证码</h5>
          <p>验证码已发送至您的手机</p>
          <div className={style.numberWrapper}>
            <div className={style.itemNumBox}>
              {codeArray.map((item, index) => {
                return (
                  <section key={index}>
                    <div
                      className={`${style.item} ${item ? "active" : ""}`}
                      onClick={handleNumberItemClick}
                    >
                      {item}
                    </div>
                  </section>
                );
              })}
            </div>
            {codeArrayIndex < 6 && (
              <div
                className={style.itemPosition}
                style={{
                  left: `${(codeArrayIndex / 6) * 100}%`,
                }}
              >
                <input
                  type="text"
                  value=""
                  onChange={hanldeInputCodeChange}
                  pattern="[0-9]*"
                  autoComplete="one-time-code"
                  inputMode="numeric"
                  maxLength={6}
                  ref={inputRef}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationCode;
