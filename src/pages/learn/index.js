import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LearnHead from "../../components/learnHead";
import { getLearnList } from "../../http/learn";
import useTitle from "../../hooks/useTitle";
import style from "./index.module.scss";

function Learn() {
  const navigate = useNavigate();
  const [initList, setinitList] = useState([]);
  const [list, setList] = useState([]);
  const [value, setValue] = useState(null);

  useTitle("学习");

  useEffect(() => {
    async function getLearnListFC() {
      const res = await getLearnList();
      const data = res.data.reverse();

      setList(data);
      setinitList(data);
    }
    getLearnListFC();
  }, []);

  useEffect(() => {
    const arr = initList.filter((item) => {
      return item.name.match(value);
    });
    console.log(arr);
    setList(arr);
  }, [value]);

  function renderList() {
    return (
      list.length > 0 &&
      list.map((item) => (
        <div
          className={style.item}
          key={item.id}
          onClick={() => {
            navigate("/" + item.url, {
              state: {
                title: item.name,
              },
            });
          }}
        >
          <h5>{item.name}</h5>
          <span className={style["title" + item.type]}>
            <b>{item.type}</b>
            <small>{item.type}</small>
          </span>
        </div>
      ))
    );
  }

  return (
    <section className={`${style.learn} page`}>
      <LearnHead value={value} setValue={setValue} />
      <div className={style.learnWrapper}>{renderList()}</div>
    </section>
  );
}

export default Learn;
