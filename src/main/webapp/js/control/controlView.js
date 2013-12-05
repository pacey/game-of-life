GameOfLife.module("Control", function(Control, GameOfLife, Backbone, Marionette, $, _){
	Control.ControlView = Marionette.ItemView.extend({
		template: Handlebars.compile($("#controlTemplate").html()),
		className: "btn-group",
		triggers: {
			"click .play": "control:play",
			"click .step": "control:step",
			"click .random": "control:random",
			"click .reset": "control:reset"
		},
		modelEvents: {
			"change": "render"
		}
	});
});