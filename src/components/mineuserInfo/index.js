import userContext from "../../utils/useRootContext/userContext"
import style from './index.module.scss';

function MineuserInfo(props) {
    const { user, navigatorFC } = props;

    return (
        <section className={style.mineuserInfo}>
            <div className={style.mineuserInfoWrapper}>
                <div className={style.mineuserInfoBox}>
                    <div className={style.avatarTitle}>
                        <img src={require("../../images/3.png")} alt="" />
                    </div>
                    <div className={style.userImg}>
                        <img src={user?.avatar || require("../../images/4.webp")} alt="" />
                    </div>
                    <div className={style.userName} onClick={() => { navigatorFC() }}>
                        {user?.name || '去登录...'}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MineuserInfo;