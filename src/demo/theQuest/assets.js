const data = [
  {
    id: 1,
    url: require("./images/wyvern.png"),
  },
  {
    id: 2,
    url: require("./images/fishbone.png"),
  },
  {
    id: 3,
    url: require("./images/wheat.png"),
  },
  {
    id: 4,
    url: require("./images/winged-sword.png"),
  },
  {
    id: 5,
    url: require("./images/mermaid.png"),
  },
  {
    id: 6,
    url: require("./images/fairy.png"),
  },
  {
    id: 7,
    url: require("./images/ghost.png"),
  },
];

const renderAssetsFill = (num) => {
  const loop = new Array(num * 3).fill("");
  const arr = [];
  for (let item in data) {
    loop.forEach(() => {
      arr.push(data[item]);
    });
  }

  function* draw(cards) {
    const c = [...cards];

    for (let i = c.length; i > 0; i--) {
      const pIdx = Math.floor(Math.random() * i);
      [c[pIdx], c[i - 1]] = [c[i - 1], c[pIdx]];
      yield c[i - 1];
    }
  }

  const result = [...draw(arr)];

  const otherLeft = result.slice(0, 8);
  const otherRight = result.slice(8, 16);

  result.splice(0, 16);

  return {
    data,
    result,
    otherLeft,
    otherRight,
  };
};

export default renderAssetsFill;
