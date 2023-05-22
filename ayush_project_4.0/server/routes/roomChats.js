const {} = require("../controllers/room");

module.exports = (router) => {
  router.post("/room", sendMessage);
  router.get("/room", getMessage);
};
