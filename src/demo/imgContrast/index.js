import { useEffect, useRef } from "react";
import LearnWrapper from "../../components/learnWrapper";
import ImgContrast from "./imgContrast";
import style from "./index.module.scss";

import img1 from "./images/0.jpg";
import img2 from "./images/1.jpg";

function Index() {
  const img = useRef(null);
  const control = useRef(null);

  useEffect(() => {
    if (img.current && control.current) {
      ImgContrast.mouse({
        img: img.current,
        control: control.current,
      });
    }
  }, []);

  return (
    <LearnWrapper>
      <section className={`${style.imgContrast} page`}>
        <section className="imgContrast">
          <img src={img2} alt="" />
          <img ref={img} src={img1} alt="" />
          <div class={style.control} ref={control}>
            <div class={style.menu}></div>
          </div>
        </section>
      </section>
    </LearnWrapper>
  );
}

export default Index;
