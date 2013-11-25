GameOfLife.module("Game", function(Game, GameOfLife, Backbone, Marionette, $, _){
	Game.CellView = Marionette.ItemView.extend({
		template: function(){
			return "";
		},
		tagName: "td",
		className: function(){
			return this.model.get("state") === "ALIVE" ? "alive" : "dead";
		},
		events: {
			"click": "onClick"
		},
		onClick: function(){
			this.model.toggleState();
		}
	});
});