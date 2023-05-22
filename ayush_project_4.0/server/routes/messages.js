const { addMessage, getMessages } = require("../controllers/message");

module.exports = (router) => {
  router.post("/addmsg/", addMessage);
  router.post("/getmsg/", getMessages);
};
