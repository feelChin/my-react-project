import { useState } from 'react';
import userContext from "../../utils/useRootContext/userContext"
import { setLocalStorage } from '../../utils/localstorage';
import style from "./index.module.scss"

import sunny from '../../images/1.svg';
import moon from '../../images/2.svg';

function Theme(porps) {
    const { setCanChangeTheme } = porps;

    const rootProvider = userContext()
    const { user, theme, setTheme } = rootProvider;

    function handleClick() {
        if (!user) {
            setCanChangeTheme(true);
            return
        }

        setTheme(!theme);
        setLocalStorage('theme', !theme);
    }

    return <section className={style.theme}>
        <div className={style.themeTitle}>
            <img src={theme ? moon : sunny} alt="" />
            <h6>{theme ? '深色' : '浅色'}</h6>
        </div>
        <div className={style.themeMenuWrapper} onClick={() => { handleClick() }}>
            <div className={`${style.themeMenu} ${theme ? 'active' : 'noactive'}`}></div>
        </div>
    </section>
}

export default Theme