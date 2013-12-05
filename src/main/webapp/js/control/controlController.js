GameOfLife.module("Control", function(Control, GameOfLife, Backbone, Marionette, $, _){
	Control.Controller = Marionette.Controller.extend({
		initialize: function(){
			var controlView = new Control.ControlView({
				model: new Control.Controls()
			});
			GameOfLife.controlRegion.show(controlView);
			this.listenTo(controlView, "control:play", this.play);
			this.listenTo(controlView, "control:step", this.step);
			this.listenTo(controlView, "control:random", this.random);
			this.listenTo(controlView, "control:reset", this.reset);
		},
		play: function(eventData){
			if(eventData.model.get("playing")){
				GameOfLife.request("stop");
				eventData.model.set("playing", false);
			}
			else{
				GameOfLife.request("play");
				eventData.model.set("playing", true);
			}
		},
		step: function(){
			GameOfLife.request("step");
		},
		random: function(){
			GameOfLife.request("randomise");
		},
		reset: function(){
			GameOfLife.request("reset");
		}
	});
	Control.addInitializer(function(){
		new Control.Controller();
	});
});