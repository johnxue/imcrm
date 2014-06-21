'use strict';

/* Controllers */

var potentialControllers = angular.module('potentialControllers', []);


potentialControllers.controller('potentialEditCtrl', ['$scope', '$routeParams', 'Potential',
    function($scope, $routeParams, Potential) {
        $scope.objPotential = Potential.get({pId: $routeParams.Id}, function(objPotential) {
            $scope.strSubhead ="编辑潜在客户";
        });

    }]);


potentialControllers.controller('potentialListCtrl', ['$scope', 'Phone',
    function($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }]);

potentialControllers.controller('potentialDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({Id: $routeParams.Id}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);
