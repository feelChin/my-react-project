import style from './index.module.scss';

function Picture(){
    return <section className={style.minePicture}>
        <div><img src={require('../../images/0.jpg')} alt=""/></div>
    </section>
}

export default Picture;