$(document).ready(function() {
	$("spinner").each(
		function(){
			var target = $(this);
			console.log(target);
			var spinclass = target.attr("type");
			if (!spinclass) spinclass = "square";
			var html = "<div class=\"spinner\">" +
					"<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/spinkit-" + spinclass + ".css\" />" +
					spinkit.render(spinclass);
					"</div>";
			$(html).insertBefore(target);
			target.detach();
		}
	);
});