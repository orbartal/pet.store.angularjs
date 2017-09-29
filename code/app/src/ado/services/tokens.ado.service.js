(function () {
    'use strict';

    angular
        .module('petStoreApp')
        .factory('TokensDataService', TokensDataService);

    TokensDataService.$inject = ['$http'];
    function TokensDataService ($http) {
    	var service = {};
        service.get = get;
        return service;

        //public methods
        function get (username, password) {
            var url = getBaseUrl ();
            var url2 = url+'/'+username+'/'+password;
            return $http.get(url2).then(onSuccess, onFailure);
        }

        //private functions
        function  getBaseUrl () {
          return "http://localhost:8080/tokens/password";
        }

        function onSuccess(result) {
        	return result;
        }

        function onFailure(error) {
        	throw error;
        }
    }

})();
