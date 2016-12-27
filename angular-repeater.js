angular.module('DREvents')
.directive('repeater', ['RecursionHelper', function (RecursionHelper) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			obj: '=',
			label: '='
		},
		transclude: true,
		templateUrl: '/Content/DynamicReports/templates/general/repeater.html',
		compile: function(element) {
			return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
				scope.IsObject = angular.isObject;
				scope.IsString = angular.isString;
				scope.IsArray = angular.isArray;

				var isBool = function(element) {
					return typeof(element) === "boolean";
				};

				scope.IsBool = isBool;

				var getCounter = function(arr) {
					return arr.map(function(item, key) {
						return key;
					});
				};

				scope.GetCounter = getCounter;
            });
		}
	};
}]);