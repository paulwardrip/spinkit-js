$(document).ready(function() {
	$("spinner").each(
		function(){
			var target = $(this);
			var spinclass = target.attr("type");
			if (!spinclass) spinclass = "square";
			var html = "<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/spinkit-" + spinclass + ".css\" />" +
					"<div class=\"spinner\">" +
						spinkit.render(spinclass);
					"</div>";
			$(html).insertBefore(target);
			target.detach();
		}
	);
});