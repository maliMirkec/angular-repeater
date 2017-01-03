/* 
 * An Angular service which helps with creating recursive directives.
 * @author Mark Lagendijk
 * @license MIT
 */
angular.module('RecursionHelper', []).factory('RecursionHelper', ['$compile', function($compile){
	return {
		/**
		 * Manually compiles the element, fixing the recursion loop.
		 * @param element
		 * @param [link] A post-link function, or an object with function(s) registered via pre and post properties.
		 * @returns An object containing the linking functions.
		 */
		compile: function(element, link){
			// Normalize the link parameter
			if(angular.isFunction(link)){
				link = { post: link };
			}

			// Break the recursion loop by removing the contents
			var contents = element.contents().remove();
			var compiledContents;
			return {
				pre: (link && link.pre) ? link.pre : null,
				/**
				 * Compiles and re-adds the contents
				 */
				post: function(scope, element){
					// Compile the contents
					if(!compiledContents){
						compiledContents = $compile(contents);
					}
					// Re-add the compiled contents to the element
					compiledContents(scope, function(clone){
						element.append(clone);
					});

					// Call the post-linking function, if any
					if(link && link.post){
						link.post.apply(null, arguments);
					}
				}
			};
		}
	};
}]);
angular.module('Repeater', ['RecursionHelper'])
.directive('recursiveRepeater', ['RecursionHelper', function (RecursionHelper) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			jsonData: '=',
			label: '='
		},
		transclude: true,
		templateUrl: './templates/repeater.html',
		compile: function(element) {
			return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
				scope.IsObject = angular.isObject;
				scope.IsNumber = angular.isNumber;
				scope.IsString = angular.isString;
				scope.IsArray = angular.isArray;

				var isBool = function(element) {
					return typeof(element) === "boolean";
				};

				scope.IsBool = isBool;
            });
		}
	};
}]);
(function (DemoApp) {
    'use strict';

    DemoApp = angular.module('DemoApp', ['Repeater']);

    DemoApp.config(function () {});
}(this));
(function(DemoApp) {

	'use strict';

	var controller = ['$scope', '$http', '$q'];

	controller.push(function($scope, $http, $q) {
        var loadData = function(url) {
    		var defer = $q.defer();
    
    		if(typeof url !== 'string') {
    			return false;
    		}
    
    		return $http.get(url).then(function(response) {
    	 		defer.resolve(response.data);
    
    			return defer.promise;
    		}, function(response) {
    			defer.reject(response);
    
    			return defer.promise;
    		});
    	};
        
        loadData('/demo/data/dummy2.json')
        .then(function(data) {
            $scope.jsonData = data;
        });
    });

	angular.module('DemoApp')
		.controller('DemoController', controller);

}(this));