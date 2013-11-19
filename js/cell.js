GameOfLife.module("Game", function(Game, GameOfLife, Backbone, Marionette, $, _){
	Game.Cell = Backbone.Model.extend({
		defaults: {
			state: "ALIVE"
		}
	});
});