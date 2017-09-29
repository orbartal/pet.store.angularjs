(function () {
    'use strict';

     angular.module('petStoreApp').
     	config(config).run(['$rootScope', '$state',  run]); // 'PermissionService'

     function run ($rootScope, $state){ //, PermissionService
  	//	PermissionService.setConfig ();
      	$rootScope.$state = $state;
     }//End run

    //Config
    function config($stateProvider, $urlRouterProvider, $qProvider, $httpProvider) {


		//https://github.com/christopherthielen/ui-router-extras/issues/356
    var interceptor = function () {
      return {
          response: function (result) {
              console.log(result);
              return result;
          }
      }
    };

    $httpProvider.interceptors.push('TokenAuthInterceptor');
		$qProvider.errorOnUnhandledRejections(false);
    $urlRouterProvider.otherwise("login");
		$stateProvider

		.state('login', {
	            url: "/login",
	            templateUrl:  "/app/src/ui/pages/login/login.view.html",
	            controller: "LoginCtrl as vm"
	     })

		.state('site', {
	            url: "",
	            templateUrl: "/app/src/ui/pages/site/site.view.html",
	            controller: "SiteCtrl as vm"
	     })

	    .state('site.pets', {
	            url: "/pets",
	            templateUrl: "/app/src/ui/pages/pets/pets.view.html",
              controller: "PetsCtrl as vm"
	     })

    //   $httpProvider.interceptors.push('MyInterceptor');


    }
})();
