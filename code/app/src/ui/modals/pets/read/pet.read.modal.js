(function () {
    'use strict';

	angular
		.module('petStoreApp')
		.controller('PeReadeModalCtrl',  ['$uibModalInstance', 'PetsAdoService', PeReadeModalCtrl]);

	function PeReadeModalCtrl($uibModalInstance, PetsAdoService) {
		var vm = this;
		vm.close = close;
		vm.read = read;
		vm.pet = {};
		vm.errorMessage = "";


		function read() {
 			vm.errorMessage = "";

 			PetsAdoService.readById (vm.pet.id).then(onSuccess,onFailure);

			function onSuccess(pet){
        vm.pet = pet;
				//$uibModalInstance.close(vm.pet);
			};

			function onFailure(error) {
				vm.errorMessage = error.data.message;
			};
		};

		function close() {
			$uibModalInstance.close('close');
		};
	}

})();
