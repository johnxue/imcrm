'use strict';

/* Controllers */
var loginControllers = angular.module('loginControllers', []);

loginControllers.controller('loginCtrl', function ($scope) {
	

	/* 方法申明 -- 开始 	*/
    $scope.update = function(objLoginInfo) {
    	alert(objLoginInfo);
    	$scope.master = angular.copy(objLoginInfo);
    };

    $scope.reset = function() {
    	$scope.objLoginInfo = {};
    }

    $scope.isUnchanged = function(objLoginInfo) {
    	return angular.equals(objLoginInfo, $scope.master);
    };

    /* 结束 ---方法申明  */

    /* 初始化代码块 -- 开始... */
    $scope.strSubhead =" - 登录";
    $scope.master= {};
    $scope.reset();
    /* 结束 --初始化代码块  */

});

loginControllers.controller('logoutCtrl', function ($scope) {
    $scope.strSubhead =" - 登出";
});

