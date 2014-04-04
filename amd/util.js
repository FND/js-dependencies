define(function() {
	return {
		info: function(msg) {
			console.log("INFO:", msg, (new Date()).toJSON());
		}
	};
});
