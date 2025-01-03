import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("Socket connected!");
  //   setInterval(() => {
  //     socket.send(
  //       "Hello, World!",
  //       Math.random() > 0.5
  //         ? () => console.log("Message sent!")
  //         : () => console.log("Message failed to send!")
  //     );

  //   }, 5000);
  socket.on("message", (message) => {
    if (message.toString() === "ping") {
      socket.send("pong");
    }
  });
});
