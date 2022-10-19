import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getMinePicture } from "../../http/mine/index.js";
import useTitle from "../../hooks/useTitle";
import Portal from "../../components/portal/index.js";
import Theme from "../../components/theme";
import MinePicture from "../../components/minePicture";
import MineuserInfo from "../../components/mineuserInfo";
import style from "./index.module.scss";
import UserContext from "../../utils/useRootContext/userContext.js";

function Mine() {
  const rootProvider = UserContext();
  const { user, signout } = rootProvider;
  const navigate = useNavigate();
  const location = useLocation();
  const [avatar, setAvatar] = useState(null);
  const [canChangeTheme, setCanChangeTheme] = useState(false);

  useTitle("个人中心");

  function navigatorFC() {
    if (!user) {
      navigate("/login", { state: { from: location } });
    }
  }

  useEffect(() => {
    async function getMinePictureFC() {
      const res = await getMinePicture();
      setAvatar(res.data);
    }
    if (user) {
      getMinePictureFC();
    }
  }, []);
  return (
    <section className={`${style.mine} page`}>
      <MinePicture />
      <MineuserInfo user={user} navigatorFC={navigatorFC} />
      <div className={style.mineList}>
        <div className={style.mineListItem}>
          <h5>主题设置</h5>
          <Theme setCanChangeTheme={setCanChangeTheme} />
        </div>
        <div className={style.mineListItem}>
          <h5>个人信息</h5>
          <div className={style.item}>
            <div>
              <i
                className="iconfont icon-didianPlaces12"
                style={{
                  color: "#1296db",
                }}
              ></i>
              <sapn>地区</sapn>
            </div>
            <p>{user && "中国"}</p>
          </div>
          <div className={style.item}>
            <div>
              <i
                className="iconfont icon-nianling"
                style={{
                  color: "#2e57e8",
                }}
              ></i>
              <sapn>年龄</sapn>
            </div>
            <p>{user && "18"}</p>
          </div>
          <div className={style.item}>
            <div>
              <i
                className="iconfont icon-qianming"
                style={{
                  color: "#f4ea2a",
                }}
              ></i>
              <sapn>笔名</sapn>
            </div>
            <p>{user && "Easy"}</p>
          </div>
          <div className={style.item}>
            <div>
              <i
                className="iconfont icon-7"
                style={{
                  color: "#d81e06",
                }}
              ></i>
              <sapn>邮箱</sapn>
            </div>
            <p>
              <a href="mailto:chinqinji@gmail.com">
                {user && "chinqinji@gmail.com"}
              </a>
            </p>
          </div>
        </div>

        {user && (
          <>
            <div className={style.mineListItem}>
              <h5>照片墙</h5>
              <div className={style.photo}>
                {avatar &&
                  avatar.map((item, index) => {
                    return <img key={item.id} src={item.value} alt="" />;
                  })}
              </div>
            </div>
            <div className={style.mineListItem}>
              <h5>其他</h5>
              <div className={style.item}>
                <div>
                  <i
                    className="iconfont icon-zhanghaoquanxianguanli"
                    style={{
                      color: "gray",
                    }}
                  ></i>
                  <sapn>账号</sapn>
                </div>
                <p
                  onClick={() => {
                    signout();
                  }}
                >
                  注销
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      {canChangeTheme && (
        <Portal>
          <section className={style.themeWarning}>
            <div className={style.themeWarningTitle}>
              😊😊登录后才能使用此功能~
            </div>
            <footer>
              <div
                className={style.themeWarningItem}
                onClick={() => {
                  navigatorFC();
                }}
              >
                去登录
              </div>
              <div
                className={style.themeWarningItem}
                onClick={() => {
                  setCanChangeTheme(false);
                }}
              >
                算了
              </div>
            </footer>
          </section>
        </Portal>
      )}
    </section>
  );
}

export default Mine;
