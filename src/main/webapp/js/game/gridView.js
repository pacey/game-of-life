GameOfLife.module("Game", function(Game, GameOfLife, Backbone, Marionette, $, _){
	Game.GridView = Marionette.CompositeView.extend({
		template: Handlebars.compile($("#gridTemplate").html()),
		tagName: "table",
		className: "table-bordered",
		itemView: Game.RowCollectionView,
		itemViewContainer: "tbody"
	});
});