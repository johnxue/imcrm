'use strict';

/* App Module */

var potentialApp = angular.module('potentialApp', [
    'ngRoute',
    'potentialControllers',
    'potentialServices'
]);

potentialApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/all', {
                templateUrl: 'templates/tpPotentialList.html',
                controller: 'potentialListCtrl'
            }).
            when('/add', {
                templateUrl: 'templates/tpEditPotential.html',
                controller: 'potentialAddCtrl'
            }).
            when('/edit/:Id', {
                templateUrl: 'templates/tpEditPotential.html',
                controller: 'potentialEditCtrl'
            }).
            when('/del/:Id', {
                templateUrl: 'templates/tpEditPotential.html',
                controller: 'potentialDeleteCtrl'
            }).
            when('/:Id', {
                templateUrl: 'templates/tpDetailPotential.html',
                controller: 'PotentialDetailCtrl'
            }).
            otherwise({
                redirectTo: '/add'
            });
    }]
);
