GameOfLife.module("Game", function(Game, GameOfLife, Backbone, Marionette, $, _){
	Game.Controller = Marionette.Controller.extend({
		initialize: function(options){
			this.rows = [];
			for(var row = 0; row < options.rows; row++){
				var cells = [];
				for(var column = 0; column < options.columns; column++){
					cells.push(new Game.Cell({
						row: row,
						column: column
					}));
				}
				this.rows.push(new Game.Row({
					cellCollection: new Game.CellCollection(cells)
				}));
			}
			_.each(this.rows, function(row, rowIndex){
				_.each(row.get("cellCollection").models, function(cell, cellIndex){
					var neighbors = [];
					if(row.get("cellCollection").models[cellIndex - 1]){
						neighbors.push(row.get("cellCollection").models[cellIndex - 1]);
					}
					if(row.get("cellCollection").models[cellIndex + 1]){
						neighbors.push(row.get("cellCollection").models[cellIndex + 1]);
					}
					if(this.rows[rowIndex - 1]){
						neighbors.push(this.rows[rowIndex - 1].get("cellCollection").models[cellIndex]);
						if(this.rows[rowIndex - 1].get("cellCollection").models[cellIndex - 1]){
							neighbors.push(this.rows[rowIndex - 1].get("cellCollection").models[cellIndex - 1]);
						}
						if(this.rows[rowIndex - 1].get("cellCollection").models[cellIndex + 1]){
							neighbors.push(this.rows[rowIndex - 1].get("cellCollection").models[cellIndex + 1]);
						}
					}
					if(this.rows[rowIndex + 1]){
						neighbors.push(this.rows[rowIndex + 1].get("cellCollection").models[cellIndex]);
						if(this.rows[rowIndex + 1].get("cellCollection").models[cellIndex - 1]){
							neighbors.push(this.rows[rowIndex + 1].get("cellCollection").models[cellIndex - 1]);
						}
						if(this.rows[rowIndex + 1].get("cellCollection").models[cellIndex + 1]){
							neighbors.push(this.rows[rowIndex + 1].get("cellCollection").models[cellIndex + 1]);
						}
					}
					cell.set("neighbors", neighbors);
				}, this)
			}, this);
			GameOfLife.reqres.setHandlers({
				"play": {
					callback: this.play,
					context: this
				},
				"stop": {
					callback: this.stop,
					context: this
				},
				"step": {
					callback: this.step,
					context: this
				},
				"randomise": {
					callback: this.randomise,
					context: this
				},
				"reset": {
					callback: this.reset,
					context: this
				}
			});
			_.bindAll(this, "step");
			var gridView = new Game.GridView({
				collection: new Game.RowCollection(this.rows)
			});
			GameOfLife.gameRegion.show(gridView);
		},
		play: function(){
			this.gameTicker = window.setInterval(this.step, 100);
		},
		stop: function(){
			window.clearInterval(this.gameTicker);
		},
		step: function(){
			_.each(this.rows, function(row){
				_.each(row.get("cellCollection").models, function(cell){
					cell.stageState();
				});
			});
			_.each(this.rows, function(row){
				_.each(row.get("cellCollection").models, function(cell){
					cell.updateState();
				});
			});
		},
		randomise: function(){
			_.each(this.rows, function(row){
				_.each(row.get("cellCollection").models, function(cell){
					if(Math.random() <= 0.2){
						cell.set("state", "ALIVE");
					}
					else{
						cell.set("state", "DEAD");
					}
				});
			});
		},
		reset: function(){
			_.each(this.rows, function(row){
				_.each(row.get("cellCollection").models, function(cell){
					cell.set("state", "DEAD");
				});
			});
		}
	});

	Game.addInitializer(function(options){
		new Game.Controller(options);
	});
});