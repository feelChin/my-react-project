import style from "./index.module.scss";

function Head(props) {
  const { title, back } = props;

  return (
    <div className={style.head}>
      <i
        className="iconfont icon-jiantou-copy"
        onClick={() => {
          back();
        }}
      ></i>
      <h1>{title}</h1>
    </div>
  );
}

export default Head;
