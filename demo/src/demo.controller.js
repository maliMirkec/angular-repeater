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
        
        $scope.myJsonOptions = [{
            url: '/demo/data/dummy.json',
            label: 'Example A'
        }, {
            url: '/demo/data/dummy2.json',
            label: 'Example B'
        }, {
            url: '/demo/data/dummy3.json',
            label: 'Example C'
        }];
		
		$scope.myJson = $scope.myJsonOptions[0];
        
        var changeData = function() {
			loadData($scope.myJson.url)
	        .then(function(data) {
	            $scope.jsonData = data;
	        });
        };
        
        $scope.ChangeData = changeData;
		
		changeData();
    });

	angular.module('DemoApp')
		.controller('DemoController', controller);

}(this));