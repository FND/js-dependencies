var moment = require("moment");

exports.info = function(msg) {
	console.log("INFO:", msg, moment().format("MMMM Do YYYY, h:mm:ss a"));
};
