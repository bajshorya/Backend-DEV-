import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });
let allSockets: WebSocket[] = [];
let userCount = 0;
wss.on("connection", (socket) => {
  allSockets.push(socket);
  userCount += 1;
  console.log("user Connected #" + userCount);

  socket.on("message", (msg) => {
    console.log("message received " + msg.toString());
    for (let i = 0; i < allSockets.length; i++) {
      const s = allSockets[i];
      s.send(msg.toString() + "  msg recvd from sever");
    }
  });
});
