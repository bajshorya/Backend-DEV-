"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
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
