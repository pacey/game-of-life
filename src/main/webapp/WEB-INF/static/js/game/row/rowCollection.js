define(["backbone", "game/row/row"], function(Backbone, Row){
	return Backbone.Collection.extend({
		model: Row
	});
});