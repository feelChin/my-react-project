import { useState, useEffect } from "react";
import LearnWrapper from "../../components/learnWrapper";
import Message from "./message.js";
import style from "./index.module.scss";
import "./message.scss";

function Index() {
  return (
    <LearnWrapper>
      <section className={`${style.messageWrapper} page`}>
        <div className={style.items}>
          <div
            className={style.item}
            onClick={() => {
              Message.success({
                context: (Math.random() * 100).toFixed(3),
              });
            }}
          >
            成功
          </div>
          <div
            className={style.item}
            onClick={() => {
              Message.error({
                context: (Math.random() * 100).toFixed(5),
              });
            }}
          >
            错误
          </div>
          <div
            className={style.item}
            onClick={() => {
              Message.warning({
                context: (Math.random() * 10).toFixed(5),
              });
            }}
          >
            警告
          </div>
          <div
            className={style.item}
            onClick={() => {
              Message.info({
                context: (Math.random() * 10000).toFixed(0),
              });
            }}
          >
            提示
          </div>
          <div
            className={style.item}
            style={{
              width: "100%",
            }}
            onClick={() => {
              Message.custom({
                time: 8000,
                context: (
                  <div className={style.custom}>
                    <div className={style.closeMessage} onClick></div>
                    <div className={style.head}>
                      自定义内容{(Math.random() * 10).toFixed(0)}
                    </div>
                    <div className={style.text}>
                      这里是消息这里是消息这里是消息 这里是消息 这里是消息
                    </div>
                  </div>
                ),
              });
            }}
          >
            自定义内容
          </div>
          <div
            className={style.item}
            onClick={() => {
              Message.config({
                time: 3000,
              });
              Message.success({
                context: "设置成功",
              });
            }}
          >
            全局设置时间为3s
          </div>
          <div
            className={style.item}
            onClick={() => {
              Message.config({
                maxCount: 3,
              });
              Message.success({
                context: "设置成功",
              });
            }}
          >
            全局设置最大条数为3条
          </div>
        </div>
      </section>
    </LearnWrapper>
  );
}

export default Index;
