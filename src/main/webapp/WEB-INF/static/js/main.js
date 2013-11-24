require.config({
	paths: {
		backbone: "libs/backbone",
		marionette: "libs/backbone.marionette",
		handlebars: "libs/handlebars-v1.1.2",
		jquery: "libs/jquery-2.0.3",
		underscore: "libs/underscore"
	},
	shim: {
		jquery: {
			exports: "$"
		},
		underscore: {
			exports: "_"
		},
		handlebars: {
			exports: "Handlebars"
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
		marionette: {
			deps: ["backbone"],
			exports: "Backbone.Marionette"
		}
	}
});

require(["gameOfLife"], function(GameOfLife){
	GameOfLife.start({
		rows: 30,
		columns: 30
	});
});