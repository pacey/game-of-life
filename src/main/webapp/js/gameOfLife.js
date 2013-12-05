var GameOfLife = new Backbone.Marionette.Application();
GameOfLife.addInitializer(function(options){
	this.addRegions({
		gameRegion: "#gameRegion",
		controlRegion: "#controlRegion"
	});
});
$(function(){
	GameOfLife.start({
		rows: 50,
		columns: 50
	});
});