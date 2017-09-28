(function () {
    'use strict';

    angular
        .module('petStoreApp')
        .factory('PetsAdoService', PetsAdoService);

    PetsAdoService.$inject = ['$q'];
    function PetsAdoService($q) {
        var service = {};
        service.readById = readPetById;
        service.create = createPet;
        service.delete = deletePet;
        return service;

        //public methods
        function readPetById(id) {
            var result = {};
            result.id = id;
            result.name = "dog1";
            result.status = "available";
            return $q.when(result);
        }

        function createPet(pet) {
            return $q.when(pet);
        }

        function deletePet(id) {
            return $q.when(true);
        }

        //private functions
        function onSuccess(result) {
        	return result;
        }

        function onFailure(error) {
            throw error;
        }
    }

})();
