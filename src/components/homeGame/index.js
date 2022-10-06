import { useEffect } from "react";
import { useState } from "react";
import style from "./index.module.scss";

const initArray = new Array(9).fill("");
const user = [
  {
    name: "张三",
    avatar: require("../../images/1.jpg"),
  },
  {
    name: "李四",
    avatar: require("../../images/2.jpg"),
  },
];

function HomeGame() {
  const [reset, setReset] = useState(null); // 重置 还是 复盘类型
  const [squares, setSquares] = useState(initArray); // 棋盘数组
  const [xIsNext, setXIsNext] = useState(true); // 切换 玩家
  const [winner, setWinner] = useState(null); // 胜利者
  const [showWinner, setShowWinner] = useState(null); // 绘制胜利高亮
  const [history, setHistory] = useState([]); // 复盘数据
  const [timeCtrl, setTimeCtrl] = useState(null); // 时间控制器

  function setHistoryFC(index) {
    const { xIsNext, squares } = history[index];

    const arr = [...history];
    arr.forEach((item) => {
      item.checked = false;
    });
    arr[index].checked = true;
    setHistory(arr);

    setXIsNext(xIsNext);
    setSquares([...squares]);
    setWinner(null);
    setShowWinner(null);
  }

  function handleClick(i) {
    if (squares[i]) return;
    if (reset === "history") return;

    const arr = [...squares];
    arr[i] = xIsNext ? "X" : "O";
    setSquares(arr);
    setXIsNext(!xIsNext);

    setHistory([
      ...history,
      {
        xIsNext,
        squares: arr,
        checked: false,
      },
    ]);
  }

  useEffect(() => {
    if (reset === "history") return;

    const result = calculateWinner(squares);
    if (result) {
      const { winner, line } = result;

      const showWinner = [...initArray];
      line.forEach((item, index) => {
        showWinner[item] = String(item);
      });
      setShowWinner(showWinner);
      setTimeout(() => {
        setWinner(winner);
        setReset(null);
      }, 1000);
    } else {
      let num = 0;
      squares.forEach((item, index) => {
        if (item) {
          num++;
        }
      });
      if (num === 9) {
        setWinner("平局");
        setReset(null);
      }
    }
  }, [squares]);

  useEffect(() => {
    if (reset === "reset") {
      setSquares([...initArray]);
      setXIsNext(true);
      setWinner(null);
      setShowWinner(null);
      setHistory([]);
    }
  }, [reset]);

  useEffect(() => {
    if (timeCtrl === null) return;

    const len = history.length;
    if (timeCtrl === len) {
      const result = calculateWinner(squares);
      if (result) {
        const { winner, line } = result;

        const showWinner = [...initArray];
        line.forEach((item, index) => {
          showWinner[item] = String(item);
        });
        setShowWinner(showWinner);
      }
      return;
    }

    const timer = setTimeout(() => {
      setHistoryFC(timeCtrl);
      setTimeCtrl((timeCtrl) => timeCtrl + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeCtrl]);

  function renderSquare() {
    return initArray.map((item, index) => (
      <div className={style.square} key={index}>
        <button
          className={showWinner && showWinner[index] ? style.showWinner : ""}
          onClick={() => {
            handleClick(index);
          }}
        >
          {squares[index] === "X" && (
            <section className={style.delete}></section>
          )}
          {squares[index] === "O" && (
            <section className={style.round}></section>
          )}
        </button>
      </div>
    ));
  }

  function renderUser() {
    return user.map((item, index) => (
      <div className={style.userItem} key={index}>
        <div className={style.userAvatar}>
          <img src={item.avatar} alt="" />
        </div>
        <div className={style.userName}>{item.name}</div>
      </div>
    ));
  }

  // 获胜判断  原理是通过胜利条件检查每一行，每一列，每一个斜线，如果有一个符合条件，则返回true
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return {
          winner: squares[a],
          line: lines[i],
        };
      }
    }
    return null;
  }

  function handleClickReset(flag) {
    setWinner("");
    setReset(flag);
  }

  return (
    <section className={style.homeGame}>
      <div className={style.user}>
        {renderUser()}
        <h5>
          <b>V</b>
          <small>s</small>
        </h5>
      </div>
      <div className={style.homeGameWrapper}>
        <div className={style.homeGameBox}>{renderSquare()}</div>
      </div>
      {winner && <Winner winner={winner} handleClickReset={handleClickReset} />}
      {reset === "history" && (
        <History
          history={history}
          handleClickReset={handleClickReset}
          setHistoryFC={setHistoryFC}
          setTimeCtrl={setTimeCtrl}
        />
      )}
    </section>
  );
}

function Winner(props) {
  const { winner, handleClickReset } = props;

  function renderText(avatar, name) {
    return (
      <>
        <div className={style.userInfo}>
          <div className={style.userAvatar}>
            <img src={avatar} alt="" />
          </div>
          <div className={style.userName}>{name}</div>
        </div>
        <footer>胜利了...</footer>
      </>
    );
  }

  function renderFC() {
    if (winner === "X") {
      return renderText(user[0].avatar, user[0].name);
    } else if (winner === "O") {
      return renderText(user[1].avatar, user[1].name);
    } else {
      return <footer>平局!</footer>;
    }
  }

  return (
    <div className={style.winner}>
      <div className={style.winnerText}>
        <header>棋盘结果</header>
        {renderFC()}
        <div className={style.winnerList}>
          <button
            onClick={() => {
              handleClickReset("reset");
            }}
          >
            继续挑战
          </button>
          <button
            onClick={() => {
              handleClickReset("history");
            }}
          >
            复盘
          </button>
        </div>
      </div>
    </div>
  );
}

function History(props) {
  const { history, setHistoryFC, handleClickReset, setTimeCtrl } = props;

  function renderList() {
    return history.map((item, index) => (
      <div
        className={`${style.historyItem} ${item.checked ? "active" : ""}`}
        key={index}
        onClick={() => {
          setHistoryFC(index);
        }}
      >
        第{index + 1}步：{item["xIsNext"] ? user[0].name : user[1].name}落子
      </div>
    ));
  }

  return (
    <section className={style.history}>
      {renderList()}
      <div className={style.historyMenu}>
        <button
          onClick={() => {
            setTimeCtrl(0);
          }}
        >
          自动播放
        </button>
        <button
          onClick={() => {
            handleClickReset("reset");
            setTimeCtrl(null);
          }}
        >
          继续挑战
        </button>
      </div>
    </section>
  );
}

export default HomeGame;
