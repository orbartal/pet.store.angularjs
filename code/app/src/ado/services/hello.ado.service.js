(function () {
    'use strict';

    angular
        .module('petStoreApp')
        .factory('HelloAdoService', HelloAdoService);

    HelloAdoService.$inject = ['$http'];
    function HelloAdoService($http) {
        var service = {};
        service.get = get;
        return service;

        //public methods
        function get() {
            var url = getBaseUrl ();
            return $http.get(url).then(onSuccess, onFailure);
        }

        //private functions
        function  getBaseUrl () {
          return "http://localhost:8080/hello";
        }

        function onSuccess(result) {
        	return result.data;
        }

        function onFailure(error) {
            throw error;
        }
    }

})();
