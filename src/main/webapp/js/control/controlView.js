GameOfLife.module("Control", function(Control, GameOfLife, Backbone, Marionette, $, _){
	Control.ControlView = Marionette.ItemView.extend({
		template: Handlebars.compile($("#controlTemplate").html()),
		className: "btn-group btn-group-lg",
		triggers: {
			"click .play": "control:play",
			"click .step" : "control:step"
		},
		modelEvents: {
			"change" : "render"
		}
	});
});