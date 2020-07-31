import { Server as WebSocketServer } from "ws";

const wsServer = new WebSocketServer({ port: 7777 });
wsServer.once("open", async function (this: WebSocket) {
  console.log("open");
});

wsServer.on("connection", async function (this: WebSocketServer, ws) {
  ws.on("message", async (data) => {
    ws.send(data);
  });
});
