import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}
let allSockets: User[] = [];
let userCount = 0;
wss.on("connection", (socket) => {
  socket.on("message", (msg) => {
    const parsedMessage = JSON.parse(msg.toString()); //because msg will be a string like this "{"type":"send"}"
    if (parsedMessage.type === "join") {
      allSockets.push({
        socket,
        room: parsedMessage.payload.roomId,
      });
    }
    if (parsedMessage.type == "chat") {
      //   const currentUserRoom = allSockets.find((x) => x.socket == socket).room;
      let currentUserRoom = null;
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].socket == socket) {
          currentUserRoom = allSockets[i].room;
        }
      }
    }
  });
});
