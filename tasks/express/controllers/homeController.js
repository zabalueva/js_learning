exports.index = function (req, res) {
	res.render("index.hbs");
};
exports.about = function (req, res) {
	res.send("О сайте");
};