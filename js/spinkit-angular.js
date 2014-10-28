angular.module('spinkit', [])
	.directive('spinner', function () {

	var getTemplate = function(type) {
		return spinkit.render(type);
	}
		
    return {
        restrict: "E",
        replace: true,
        scope: {},
        template: function (tElement, tAttrs) {
        	var type = tAttrs.type;
    		if (!type) type = "square";
    		
        	var html = "<div class=\"spinner\">" + 
        		"<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/spinkit-" + type + ".css\" />" +
        		getTemplate(type) + 
        		"</div>";

        	return html;
        }
        
    };
});
