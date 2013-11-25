GameOfLife.module("Game", function(Game, GameOfLife, Backbone, Marionette, $, _){
	Game.Cell = Backbone.Model.extend({
		defaults: {
			state: "ALIVE"
		},
		toggleState: function(){
			if(this.get("state") === "ALIVE"){
				this.set("state", "DEAD");
			}
			else{
				this.set("state", "ALIVE");
			}
			console.log("Toggled state from " + this.previousAttributes().state + " to " + this.get("state") + " for cell " + this.get("row") + "," + this.get("column"));
		}
	});
});