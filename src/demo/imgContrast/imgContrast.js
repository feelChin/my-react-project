class ImgContrast {
  mouse(props) {
    const { img, control } = props;
    img.style.clipPath = `polygon(0 0, 50% 0, 50% 100%, 0% 100%)`;
    const parentNode = control.parentNode;
    const getWidth = parentNode.offsetWidth;
    const getLeft = parentNode.offsetLeft;
    let marginX;

    const handler = (e) => {
      marginX = e.pageX || e.touches[0].pageX - getLeft;
      const num = (marginX / getWidth) * 100 + "%";
      control.style.left = num;
      img.style.clipPath = `polygon(0 0, ${num} 0, ${num} 100%, 0% 100%)`;
    };

    control.addEventListener("selectstart", function (e) {
      e.preventDefault();
    });

    control.addEventListener("mousedown", () => {
      parentNode.addEventListener("mousemove", handler);
    });

    control.addEventListener("mouseup", () => {
      parentNode.removeEventListener("mousemove", handler);
    });

    control.addEventListener("touchstart", () => {
      parentNode.addEventListener("touchmove", handler);
    });

    control.addEventListener("touchend", () => {
      parentNode.addEventListener("touchmove", handler);
    });
  }
}

export default new ImgContrast();
