(function () {
    'use strict';

    angular
        .module('petStoreApp')
        .service('AuthenticationService', AuthenticationService);

    function AuthenticationService () {
        var service = {};
        service.currentUser = null;
        service.token = null;

        service.getUser = getUser;
        service.getToken = getToken;
        service.setAuth = setAuth;
        service.clearCredentials = clearCredentials;
        return service;

        function getUser () {
            return service.currentUser;
        }

        function getToken () {
            return service.token;
        }

        function setAuth (user, token) {
            service.token = processToken (token);
            service.currentUser = user;

            function processToken (token){
                if (angular.isString(token)){
                  return token;
                }else{
                   return JSON.stringify(token);
                }
            }

        }

        function clearCredentials() {
            service.currentUser = null;
            service.token = null;
        }
    }//End AuthenticationService
})();
