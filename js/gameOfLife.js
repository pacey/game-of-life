var GameOfLife = GameOfLife || {};
GameOfLife = new Marionette.Application();
$(function(){
	GameOfLife.addRegions({
		gameRegion: "#gameRegion",
		controlRegion: "#controlRegion"
	});
	GameOfLife.start({
		rows: 10,
		columns: 10
	});
});