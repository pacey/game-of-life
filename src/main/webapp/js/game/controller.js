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
				"step": {
					callback: this.step,
					context: this
				}
			});
			var gridView = new Game.GridView({
				collection: new Game.RowCollection(this.rows)
			});
			GameOfLife.gameRegion.show(gridView);
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
		}
	});

	Game.addInitializer(function(options){
		new Game.Controller(options);
	});
});