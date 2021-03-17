const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController.js");

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource!!!');
}); */

/* router.use("/create", userController.addUser);
router.use("/", userController.getUsers);
 */
router.use("/postuser", userController.postUser);
router.use("/create", userController.addUser);
router.use("/", userController.getUsers);

module.exports = router;
