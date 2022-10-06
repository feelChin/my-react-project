let socket;

function WebSocketFC(url, callback) {
  socket = new WebSocket(`ws://${url}`);
  socket.addEventListener("close", socketOnClose);
  socket.addEventListener("error", socketOnError);
  socket.addEventListener("message", socketOnMessage);
  socket.addEventListener("open", socketOnOpen);

  function socketOnClose(data) {
    console.log("连接关闭");
    callback(data);
  }

  function socketOnError() {
    console.log("连接错误");
  }

  function socketOnMessage(data) {
    callback(data);
  }

  function socketOnOpen() {
    console.log("连接成功");
  }
}

export const WebSocketClose = () => {
  socket.close();
};

export const WebSocketSend = (data) => {
  socket.send(data);
};

export const WebSocketInit = (url, callback) => {
  WebSocketFC(url, callback);
};

// WebSocketInit('121.40.165.18:8800',(result)=>{
//     console.log(result)
// });
