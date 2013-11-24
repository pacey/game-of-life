define(["marionette"], function(Marionette){
	return Marionette.ItemView.extend({
		template: function(){
			return "";
		},
		tagName: "td",
		className: function(){
			return this.model.get("state") === "ALIVE" ? "alive" : "dead";
		},
		events: {
			"click": "onClick"
		},
		onClick: function(){
			this.model.toggleState();
		}
	});
});