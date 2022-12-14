import { useMemo } from "react";
import { useState, useEffect, useRef } from "react";
import LearnWrapper from "../../components/learnWrapper";
import style from "./index.module.scss";

let data = [];
const column = new Map([
  [
    "text",
    (data, index, cIndex) => {
      const option = {
        data,
        index,
        cIndex,
      };
      return <InputMap {...option} />;
    },
  ],
  [
    "number",
    (data, index, cIndex) => {
      const option = {
        data,
        index,
        cIndex,
      };
      return <InputNumberMap {...option} />;
    },
  ],
]);
const columnType = ["text", "number"];

function InputMap(props) {
  const { data, index, cIndex } = props;
  const inputRef = useRef(null);
  const initValue = data[index][cIndex];

  useEffect(() => {
    console.log(data);
    if (inputRef.current) {
      inputRef.current.value = initValue;
    }
  }, [data]);

  return (
    <input
      ref={inputRef}
      type="text"
      onChange={(e) => {
        const value = e.target.value;
        data[index][cIndex] = value;
      }}
    />
  );
}

function InputNumberMap(props) {
  const { data, index, cIndex } = props;
  const inputRef = useRef(null);
  const initValue = data[index][cIndex];

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = initValue;
    }
  }, [data]);

  return (
    <input
      ref={inputRef}
      type="number"
      onChange={(e) => {
        const value = e.target.value;
        data[index][cIndex] = value;
      }}
    />
  );
}

function TableAddAndRemove() {
  const [init, setInit] = useState(true);
  const [row, setRow] = useState(1);

  function removeRow(index) {
    setRow((row) => row - 1);
    data.splice(index, 1);
  }

  function addRow() {
    setRow((row) => row + 1);
  }

  function renderTable() {
    const array = new Array(row).fill([]);

    const dataArray = [];
    array.forEach((item, index) => {
      const dataItem = data[index];

      if (dataItem) {
        dataArray.push(dataItem);
      } else {
        dataArray.push([]);
      }

      columnType.forEach((cItem, cIndex) => {
        if (dataItem && dataItem[cIndex]) {
          dataArray[index][cIndex] = dataItem[cIndex];
        } else {
          dataArray[index].push([]);
        }
      });
    });

    data = dataArray;

    return array.map((item, index) => (
      <section className={style.rowItem} key={index}>
        {columnType.map((cItem, cIndex) => (
          <div key={cIndex} className={style.item}>
            {column.get(cItem)(data, index, cIndex)}
          </div>
        ))}
        {row > 1 && (
          <button
            onClick={() => {
              removeRow(index);
            }}
            className={style.remove}
          >
            -
          </button>
        )}
      </section>
    ));
  }

  useEffect(() => {
    if (init) {
      data = [];
      setInit(false);
    }
  }, []);

  return (
    <>
      <section className={style.tableAddAndRemoveWrapper}>
        <section className={style.rowItem}>
          <div className={style.item}>??????</div>
          <div className={style.item}>??????</div>
        </section>
        {renderTable()}
      </section>
      <button
        onClick={() => {
          addRow();
        }}
        className={style.add}
      >
        ??????
      </button>
      <button
        onClick={() => {
          let text = "";
          data.forEach((item, index) => {
            text += `????????? ${item[0]}   ????????? ${item[1]} \n`;
          });
          alert(text);
        }}
        className={style.add}
      >
        ??????
      </button>
    </>
  );
}

export default TableAddAndRemove;
