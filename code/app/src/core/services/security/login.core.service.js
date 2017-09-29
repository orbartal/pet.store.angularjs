(function () {
  'use strict';

  angular
    .module('petStoreApp')
    .service('LoginService', LoginService);

    LoginService.$inject = ['$state', 'TokensDataService', 'AuthenticationService'];
    function LoginService($state, TokensDataService, AuthenticationService) {
        var service = {};
        service.login = login;
        return service;

        function login(username, password) {
          //  var requst = {'username' : username, 'password' : password};
            TokensDataService.get (username, password).then(onSuccess, onFailure);

            // private functions
            function onSuccess(response) {
                var token = response.data; //{"name" : username, 'role' : 'admin'};
                AuthenticationService.setAuth(username, token);
                $state.go("site.pets");
            }

            function onFailure(error) {
            	throw error;
            }

        }
    }
})();
