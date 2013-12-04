GameOfLife.module("Control", function(Control, GameOfLife, Backbone, Marionette, $, _){
	Control.Controls = Backbone.Model.extend({
		defaults: {
			playing: false
		}
	});
});