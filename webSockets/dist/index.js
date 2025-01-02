"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", (socket) => {
    console.log("Socket connected!");
    setInterval(() => {
        socket.send("Hello, World!", Math.random() > 0.5
            ? () => console.log("Message sent!")
            : () => console.log("Message failed to send!"));
        socket.on("message", (message) => {
            console.log(`Received message: ${message.toString()}`);
        });
    }, 5000);
});
