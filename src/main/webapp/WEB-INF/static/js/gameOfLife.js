define(["marionette", "game/controller"], function(Marionette, GameController){
	var GameOfLife = new Marionette.Application();
	GameOfLife.addInitializer(function(options){
		this.addRegions({
			gameRegion: "#gameRegion",
			controlRegion: "#controlRegion"
		});
		new GameController(options);
	});
	return GameOfLife;
});