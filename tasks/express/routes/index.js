const express = require('express');
const router = express.Router();
const homeController = require("../controllers/homeController.js");

const hbs = require("hbs");

hbs.registerHelper("getTime", function(){

  var myDate = new Date();
  var hour = myDate.getHours();
  var minute = myDate.getMinutes();
  var second = myDate.getSeconds();
  if (minute < 10) {
      minute = "0" + minute;
  }
  if (second < 10) {
      second = "0" + second;
  }
  return "Текущее время: " + hour + ":" + minute + ":" + second;
});

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.get("/about", homeController.about);
router.get("/", homeController.index);


module.exports = router;


//set DEBUG=app:* & npm start

//git remote add origin https://github.com/zabalueva/express_test.git
//git branch -M master
//git push -u origin master