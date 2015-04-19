/**
var new app = * newapp Modul;
*
* Description
*/
var newapp = angular.module('newapp', ['ngResource']);

newapp.controller('loginController', ['$scope,$http', function($scope,$http){
	

}])

newapp.controller('jobController', ['$scope', function($scope){
	
	$scope.jobtypes = ['All Jobs','Daily Job','Weekly Job','Monthly Job','Adhoc Job'];

}])