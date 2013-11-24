define(["marionette", "jquery", "handlebars", "game/row/rowCollectionView"], function(Marionette, $, Handlebars, RowCollectionView){
	return Marionette.CompositeView.extend({
		template: Handlebars.compile($("#gridTemplate").html()),
		tagName: "table",
		className: "table-bordered",
		itemView: RowCollectionView,
		itemViewContainer: "tbody"
	});
});