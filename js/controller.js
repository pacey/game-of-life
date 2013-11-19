GameOfLife.module("Game", function(Game, GameOfLife, Backbone, Marionette, $, _){
	Game.Controller = Marionette.Controller.extend({
		initialize: function(options){
			var rows = [];
			for(var row = 0; row < options.rows; row++){
				var cells = [];
				for(var column = 0; column < options.columns; column++){
					cells.push(new Game.Cell());
				}
				rows.push(new Game.CellCollection(cells));
			}
			var gridView = new Game.GridView({
				collection: new Game.RowCollection(rows)
			});
			GameOfLife.gameRegion.show(gridView);
		}
	});
	Game.addInitializer(function(options){
		var gameController = new Game.Controller(options);
	});
});