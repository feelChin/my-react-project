import { useState, useEffect } from "react";
import { getMinePicture } from "../../http/mine/index.js";
import { useNavigate, useLocation } from "react-router-dom";
import userContext from "../../utils/useRootContext/userContext";
import useTitle from "../../hooks/useTitle";
import Head from "../../components/head";
import style from "./index.module.scss";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  useTitle("登录");

  const rootProvider = userContext();
  const { signin } = rootProvider;
  const [state, setState] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    async function getMinePictureFC() {
      const res = await getMinePicture();
      const data = res.data;
      data[1].checked = true;
      setAvatar(data);
    }
    getMinePictureFC();
  }, []);

  function changeAvatar(index) {
    const arr = [...avatar];
    arr.forEach((item) => {
      item.checked = false;
    });
    arr[index].checked = true;
    setAvatar(arr);
  }

  function changeName(e) {
    const name = e.target.value;
    setUserName(name);
  }

  async function login() {
    const data = {
      name: userName,
      avatar: avatar.filter((item) => item.checked)[0].value,
    };
    await signin(data);
    navigate(from || -1);
  }

  return (
    <section className={`${style.login} page`}>
      <Head
        title="登录"
        back={() => {
          navigate(-1);
        }}
      />
      <section className={style.loginWrapper}>
        <div className={style.loginBox}>
          <div
            className={`${style.item} ${state ? "active" : ""}`}
            onClick={() => {
              setState(true);
            }}
          >
            <p>游客</p>
          </div>
          <div
            className={`${style.item} ${state ? "" : "active"}`}
            onClick={() => {
              setState(false);
            }}
          >
            <p>用户</p>
          </div>
        </div>
        <section className={style.tourist}>
          <div className={style.touristBox}>
            {avatar &&
              avatar.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={style.touristItem}
                    onClick={() => {
                      changeAvatar(index);
                    }}
                  >
                    <img
                      src={item.value}
                      className={item.checked ? "active" : ""}
                      alt=""
                    />
                  </div>
                );
              })}
          </div>
          <input
            type="text"
            onChange={(e) => [changeName(e)]}
            placeholder="请输入你的名字"
          />
        </section>
        <button
          onClick={() => {
            login();
          }}
        >
          确认登录
        </button>
      </section>
    </section>
  );
}

export default Login;
