import React from "react"
import HomeGame from '../../components/homeGame';
import style from './index.module.scss';

function Home() {
    return (
        <section className={`${style.home} page`}>
            <HomeGame />
        </section>
    )
}

export default Home