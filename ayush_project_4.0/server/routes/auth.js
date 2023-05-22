const { login, register, getAllUsers, logOut } = require("../controllers/user");

module.exports = (router) => {
  router.post("/login", login);
  router.post("/register", register);
  router.get("/allusers/:id", getAllUsers);
  router.get("/logout/:id", logOut);
};
