var GameOfLife = new Backbone.Marionette.Application();
GameOfLife.addInitializer(function(options){
	this.addRegions({
		gameRegion: "#gameRegion",
		controlRegion: "#controlRegion"
	});
});
$(function(){
	GameOfLife.start({
		rows: 20,
		columns: 20
	});
});