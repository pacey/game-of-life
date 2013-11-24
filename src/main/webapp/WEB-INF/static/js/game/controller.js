define([
	"marionette",
	"game/gridView",
	"game/cell/cell",
	"game/cell/cellCollection",
	"game/row/row",
	"game/row/rowCollection"],
	function(Marionette, GridView, Cell, CellCollection, Row, RowCollection){
		return Marionette.Controller.extend({
			initialize: function(options){
				var rows = [];
				for(var row = 0; row < options.rows; row++){
					var cells = [];
					for(var column = 0; column < options.columns; column++){
						cells.push(new Cell({
							row: row,
							column: column
						}));
					}
					rows.push(new Row({
						cellCollection: new CellCollection(cells)
					}));
				}
				var gridView = new GridView({
					collection: new RowCollection(rows)
				});
				var GameOfLife = require("gameOfLife");
				GameOfLife.gameRegion.show(gridView);
			}
		});
});