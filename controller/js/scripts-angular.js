var app = angular.module("myApp", ['ngRoute','ngAnimate']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider
	
	.when('/home', {
		templateUrl: 'view/home.html',
		controller: 'homeController'
	})
	
	.when('/consulta', {
		templateUrl: 'view/consulta-ans.html',
		controller: 'consultaController'
	})
		
	.when('/inclusao', {
		templateUrl: 'view/adiciona-ans.html',
		controller: 'novoAnsController'
	})
	
	.when('/alteracao', {
		templateUrl: 'view/altera-ans.html',
		controller: 'alteraController'
	})
	
	.when('/exclusao', {
		templateUrl: 'view/cancela-ans.html',
		controller: 'cancelaAnsController'
	})
	
	.otherwise({
		redirectTo: '/login',
		templateUrl: 'view/login.html',
		controller: 'loginController'
	});
}]);

app.controller('homeController',function($scope,$http){
	$scope.titulo='Gestor de ANS';
})

app.controller('consultaController',function($scope,$http){
	$scope.titulo='Consulta detalhada do ANS';
})

app.controller('novoAnsController',function($scope,$http){
	$scope.titulo='Formulário de inclusão de novo ANS';
})

app.controller('alteraController',function($scope,$http){
	$scope.titulo='Formulário de alteração';
})

app.controller('cancelaAnsController',function($scope,$http){
	$scope.titulo='Formulário de cancelamento';
})

app.controller('loginController',function($scope,$http){
	$scope.titulo='CRM-ANS';
	
	$scope.mostraBotaoLogin=true;
	$scope.mostraBotaoNovoLogin=false;
	$scope.mostraBotaoNovaSenha=false;
})

