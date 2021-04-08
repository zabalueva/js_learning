var express = require('express');
var router = express.Router();

let name = 'Tom';
let currentDate = new Date();

/* GET test page. */
router.get('/', function(req, res, next) {
	res.render("test.hbs", {
        title: "Мои контакты",
        emailsVisible: false,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    })
  /* res.send(`this is new rout with ${name} ${currentDate.getDay()} `); */
});

module.exports = router;