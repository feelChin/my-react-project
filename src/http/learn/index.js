import Http from "../fetch.js";

export const getLearnList = () => {
  return Http("./demo.json", { method: "GET" });
};
