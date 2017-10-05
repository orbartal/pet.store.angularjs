(function () {
    'use strict';

    angular
        .module('petStoreApp')
        .factory('TokensAdoService', TokensAdoService);

    TokensAdoService.$inject = ['$http'];
    function TokensAdoService ($http) {
    	var service = {};
        service.getByPassword = getByPassword;
        service.getByNothing = getByNothing;
        return service;

        //public methods
        function getByNothing () {
            var url = getBaseUrl ()+"/nothing";
            return $http.get(url).then(onSuccess, onFailure);
        }

        function getByPassword (username, password) {
            var url = getBaseUrl () + "/password";
            var url = url+'/'+username+'/'+password;
            return $http.get(url).then(onSuccess, onFailure);
        }

        //private functions
        function  getBaseUrl () {
          return "http://localhost:8080/tokens";
        }

        function onSuccess(result) {
        	return result;
        }

        function onFailure(error) {
        	throw error;
        }
    }

})();
