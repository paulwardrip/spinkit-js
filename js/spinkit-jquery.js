$(document).ready(function() {
	function parts(classname, number) {
		var out = "";
		for (var i = 1; i <= number; i++) {
			out += "<div class=\"" + classname + i + "\"></div>";
		}
		return out;
	}
	
	function render(spinclass) {
		switch(spinclass) {
			case "square":
				return "<div class=\"square\"></div>";
				
			case "double-bounce":
				return "<div class=\"double-bounce\">" +
					parts("double-bounce", 2) +
					"</div>";

			case "cascade":
				return "<div class=\"cascade\">" +
					parts("rect", 5) +
					"</div>";
				
			case "cube":
				return "<div class=\"cube\">" +
					parts("cube", 2) +
					"</div>";
				
			case "fade":
				return "<div class=\"fade\"></div>";

			case "dots":
				return "<div class=\"dots\">" +
					parts("dot", 2) +
					"</div>";
				
			case "bounce":
				return "<div class=\"bounce\">" +
					parts("bounce", 3) +
					"</div>";
			
			case "circles":
				out = "<div class=\"circles\">"
				for (var j=1; j <= 3; j++) {
					out += "<div class=\"spinner-container container" + j + "\">" +
						parts("circle", 4) +
						"</div>"
				}
				return out + "</div>";
				
			default:
				console.log("Class " + spinclass + " not recognized, rendering default spinner.")
				return "<div class=\"square\"></div>";
		}
	}
	
	$("spinner").each(
		function(){
			var target = $(this);
			var spinclass = target.attr("class");
			if (!spinclass) spinclass = "square";
			var html = "<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/spinkit-" + spinclass + ".css\" />" +
					"<div class=\"spinner\">" +
						render(spinclass);
					"</div>";
			$(html).insertBefore(target);
			target.detach();
		}
	);
});