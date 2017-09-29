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
            config.headers['orbartal'] = 'blue cat';
            return config;
        }
    }
})();

/*
angular
  .module('petStoreApp').factory('MyInterceptor',[MyInterceptor]);

  function MyInterceptor (){
    return {
      request: function(config){
         config.headers.authorization = "token";
         config.headers['x-csrf-token'] = 'lalalalala';
          config.headers['orbartal'] = 'blue cat';
        return config;
      }
    }
  }//function
*/
