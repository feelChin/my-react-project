export let renderQueue;
export let isFirstrender = false;

export const initQueue = () => {
  renderQueue = [];
};

export const isFirstrenderFlase = () => {
  isFirstrender = false;
};

export const isFirstrenderTrue = () => {
  isFirstrender = true;
};
