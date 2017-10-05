(function () {
  'use strict';

  angular
    .module('petStoreApp')
    .service('LoginService', LoginService);

    LoginService.$inject = ['$state', 'TokensAdoService', 'AuthenticationService'];
    function LoginService($state, TokensAdoService, AuthenticationService) {
        var service = {};
        service.login = login;
        return service;

        function login(username, password) {
            TokensAdoService.getByPassword (username, password).then(onSuccess, onFailure);

            // private functions
            function onSuccess(response) {
                var token = response.data.token;
                AuthenticationService.setAuth(username, token);
                $state.go("site.pets");
            }

            function onFailure(error) {
            	throw error;
            }

        }
    }
})();
