var moment = require("moment");
var $ = require("jquery");

exports.info = function(msg) {
	var timestamp = moment().format("MMMM Do YYYY, h:mm:ss a");
	console.log("INFO:", msg, timestamp);
	$("<p />").text(timestamp).appendTo(document.body);
};
