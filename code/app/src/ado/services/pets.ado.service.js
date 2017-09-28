(function () {
    'use strict';

    angular
        .module('petStoreApp')
        .factory('PetsAdoService', PetsAdoService);

    PetsAdoService.$inject = ['$http'];
    function PetsAdoService($http) {
        var service = {};
        service.readById = readPetById;
        service.create = createPet;
        service.delete = deletePet;
        return service;

        //public methods
        function readPetById(id) {
            var url = getBaseUrl ();
            return $http.get(url+'/'+id).then(onSuccess, onFailure);
        }

        function createPet(pet) {
            var url = getBaseUrl ();
            return $http.post(url, pet).then(onSuccess, onFailure);
        }

        function deletePet(id) {
            var url = getBaseUrl ();
            return $http.delete(url+'/'+id).then(onSuccess, onFailure);
        }

        //private functions
        function  getBaseUrl () {
          return "http://localhost:8080/pet";
        }

        function onSuccess(result) {
        	return result.data;
        }

        function onFailure(error) {
            throw error;
        }
    }

})();
