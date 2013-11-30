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
		}
	});
});