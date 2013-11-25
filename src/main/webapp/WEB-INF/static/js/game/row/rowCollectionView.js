GameOfLife.module("Game", function (Game, GameOfLife, Backbone, Marionette, $, _) {
	Game.RowCollectionView = Marionette.CollectionView.extend({
		tagName: "tr",
		itemView: Game.CellView,
		initialize: function () {
			this.collection = this.model.get("cellCollection");
		}
	});
});