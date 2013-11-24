define(["marionette", "game/cell/cellView"], function(Marionette, CellView){
	return Marionette.CollectionView.extend({
		tagName: "tr",
		itemView: CellView,
		initialize: function(){
			this.collection = this.model.get("cellCollection");
		}
	});
});