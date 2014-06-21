'use strict';

/* Services */

var potentialServices = angular.module('potentialServices', ['ngResource']);

//potentialServices.factory('Potential', ['$http',
//    function($http){
//        var baseUrl="localhsot";
//        return {
//            get : function(id) {
//                return $http.get(baseUrl+"/"+id);
//            },
//            save: function(recode) {
//                var url=recode.id ? baseUrl+"/"+recode.id : baseUrl;
//                return $http.post(url,recode);
//            },
//            query: function() {
//                return $http.get(baseUrl);
//            },
//            change: function(recode) {
//                return $http.post(baseUrl+"/"+recode.id,recode);
//            }
//        };
//    }]);


myAppModule.factory('Potential', ['$resource', function($resource) {
    var baseUrl='localhost';
    return $resource(baseUrl+'/:userId/potential/:pId',
        {userId: '@uid', potentialId: '@pid'},
        {
            query : { method: "GET",params: {userId : uid}, isArray: true },
            get   : { method : "GET",params: { userId:uid, potentialId:pid } },
            add   : { method : "POST",params:{userId:uid} },
            del   : { method : "DELETE",params:{userId:uid,potentialId:pid}},
            update: { method : "PUT",params:{userId:uid,potentialId:pid} }
        });
}]);