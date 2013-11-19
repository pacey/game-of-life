GameOfLife.module("Game", function(Game, GameOfLife, Backbone, Marionette, $, _){
	Game.CellView = Marionette.ItemView.extend({
		tagName: "td",
		className: function(){
			return this.model.get("state") === "ALIVE" ? "alive" : "dead";
		}
	});
});