const express = require("express");
const cors = require("cors");
const compression = require("compression");
const SmartHttp = require("smart-http");
const app = express();
const routes = require("./routes");
const { PORT } = require("./config");
const server = app.listen(PORT);

try {
  // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  app.enable("trust proxy");
  app.use(SmartHttp());
  const io = socket(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });
  global.onlineUsers = new Map();

  io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
      onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
      const sendUserSocket = onlineUsers.get(data.to);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-recieve", data.msg);
      }
    });
  });
  app.use(
    cors({
      exposedHeaders: [
        "message",
        "x-coreplatform-paging-limit",
        "x-coreplatform-total-records",
      ],
    })
  );
  app.use(compression());
  app.use(express.json());
  app.use("/", routes);
} catch (e) {
  server.close();
}

module.exports = index;
