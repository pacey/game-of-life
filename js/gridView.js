GameOfLife.module("Game", function(Game, GameOfLife, Backbone, Marionette, $, _){
	Game.GridView = Marionette.CompositeView.extend({
		tagName: "table",
		itemView: Game.RowCollectionView,
		template: Handlebars.compile($("#gridTemplate").html()),
		appendHtml: function(collectionView, itemView, index){
			collectionView.$("tbody").append(itemView.el);
		}
	});
});