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
        
        loadData('/demo/data/dummy.json')
        .then(function(data) {
            $scope.jsonData = data;
        });
    });

	angular.module('DemoApp')
		.controller('DemoController', controller);

}(this));