GameOfLife.module("Control", function(Control, GameOfLife, Backbone, Marionette, $, _){
	Control.Controller = Marionette.Controller.extend({
		initialize: function(){
			var controlView = new Control.ControlView({
				model: new Control.Controls()
			});
			GameOfLife.controlRegion.show(controlView);
			this.listenTo(controlView, "control:play", this.play);
			this.listenTo(controlView, "control:step", this.step);
		},
		play: function(eventData){
			if(eventData.model.get("playing")){
				window.clearInterval(this.paintInterval);
				eventData.model.set("playing", false);
			}
			else{
				this.paintInterval = window.setInterval(function(){
					GameOfLife.request("step");
				}, 25);
				eventData.model.set("playing", true);
			}
		},
		step: function(){
			GameOfLife.request("step");
		}
	});
	Control.addInitializer(function(){
		new Control.Controller();
	});
});