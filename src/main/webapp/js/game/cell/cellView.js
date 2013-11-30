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
		modelEvents: {
			"change": "onModelChange"
		},
		onClick: function(){
			this.model.toggleState();
		},
		onModelChange: function(){
			if(this.model.get("state") === "ALIVE"){
				this.$el.removeClass("dead").addClass("alive");
			}
			else{
				this.$el.removeClass("alive").addClass("dead");
			}
		}
	});
});