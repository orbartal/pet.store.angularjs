(function () {
  'use strict';

  angular
    .module('petStoreApp')
    .service('TokenAuthInterceptor', TokenAuthInterceptor);

    TokenAuthInterceptor.$inject = ['AuthenticationService'];
    function TokenAuthInterceptor(AuthenticationService) {
        var service = {};
        service.request = request1;
        return service;

        function request1 (config){
            config.headers.authorization =  AuthenticationService.getToken();
            config.headers.orbartal =  AuthenticationService.getToken();
            return config;
        }
    }
})();
