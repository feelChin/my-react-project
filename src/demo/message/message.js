import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

function MessageComponents(props) {
  const { type, handlerClose, time, context, defaultTime } = props.data;

  useEffect(() => {
    const t = setTimeout(handlerClose, time || defaultTime);
    return () => {
      t && clearTimeout(t);
    };
  }, []);

  function renderContext() {
    const newProps = context.props.children.map((item) => {
      if (item.props.onClick) {
        return React.cloneElement(item, {
          onClick: handlerClose,
        });
      }
      return React.cloneElement(item);
    });
    const clone = React.cloneElement(context, props, newProps);
    return clone;
  }
  return (
    <div className="message">
      {type ? (
        <>
          <div className="icon">{myMessage.messageIcon(type)}</div>{" "}
          <div className="context">{context}</div>
        </>
      ) : (
        <>{renderContext()}</>
      )}
    </div>
  );
}

class Message {
  constructor() {
    this.time = 6000;
    this.maxCount = 7;
  }

  messageIcon(t) {
    return new Map([
      ["success", "成功："],
      ["error", "错误："],
      ["warning", "警告："],
      ["info", "提示："],
    ]).get(t);
  }

  getContainer() {
    const container = document.querySelector(".customMessageWrapper");
    if (!container) {
      const _container = document.createElement("section");
      _container.className = "customMessageWrapper";
      document.body.append(_container);
      return _container;
    }
    return container;
  }

  _message = (props) => {
    const container = this.getContainer();
    const _dom = document.createElement("div");
    _dom.className = "messageinlineBlock";
    container.appendChild(_dom);
    const node = ReactDOM.createRoot(_dom);

    const allDom = container.children;
    if (allDom.length > this.maxCount) {
      allDom[0].classList.add("leave");
      setTimeout(() => {
        allDom[0].remove();
      }, 400);
    }

    const handlerClose = () => {
      _dom.classList.add("leave");
      setTimeout(() => {
        node.unmount();
        _dom.remove();
      }, 400);
    };

    const child = {
      ...props,
      handlerClose,
      defaultTime: this.time,
    };

    node.render(<MessageComponents data={child} />);
  };
}

class MessageOption extends Message {
  constructor() {
    super();
  }

  success(props) {
    this._message({
      type: "success",
      ...props,
    });
  }

  error(props) {
    this._message({
      type: "error",
      ...props,
    });
  }
  warning(props) {
    this._message({
      type: "warning",
      ...props,
    });
  }
  info(props) {
    this._message({
      type: "info",
      ...props,
    });
  }
  custom(props) {
    this._message({
      ...props,
    });
  }
  config(props) {
    for (let key in props) {
      this[key] = props[key];
    }
  }
}

const myMessage = new MessageOption();

export default myMessage;
