GameOfLife.module("Game", function(Game, GameOfLife, Backbone, Marionette, $, _){
	Game.Cell = Backbone.Model.extend({
		defaults: {
			state: "DEAD"
		},
		toggleState: function(){
			if(this.get("state") === "ALIVE"){
				this.set("state", "DEAD");
			}
			else{
				this.set("state", "ALIVE");
			}
			console.log("cell " + this.get("row") + "," + this.get("column") + " has the neighbors: "+ _.map(this.get("neighbors"), function(cell){
				return "(" + cell.get("row") + "," + cell.get("column") + ")";
			}).join(","));
		},
		stageState: function(){
			var neighborsState =_.countBy(this.get("neighbors"), function(cell){
				return cell.get("state");
			});
			if(this.get("state") === "ALIVE"){
				if(neighborsState.ALIVE < 2){
					this.set("stagedState", "DEAD");
				}
				if(neighborsState.ALIVE > 3){
					this.set("stagedState", "DEAD");
				}
			}
			else{
				if(neighborsState.ALIVE === 3){
					this.set("stagedState", "ALIVE");
				}
			}
		},
		updateState: function(){
			if(this.has("stagedState")){
				this.set("state", this.get("stagedState"));
				this.unset("stagedState");
			}
		}
	});
});