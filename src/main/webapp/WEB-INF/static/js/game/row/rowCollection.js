GameOfLife.module("Game", function(Game, GameOfLife, Backbone, Marionette, $, _){
	Game.RowCollection = Backbone.Collection.extend({
		model: Game.Row
	});
});