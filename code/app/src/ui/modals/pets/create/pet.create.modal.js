(function () {
    'use strict';

	angular
		.module('petStoreApp')
		.controller('PetCreateModalCtrl',  ['$uibModalInstance', 'PetsAdoService', PetCreateModalCtrl]);

	function PetCreateModalCtrl($uibModalInstance, PetsAdoService) {
		var vm = this;
		vm.create = create;
		vm.cancel = cancel;
		vm.pet = {};
		vm.errorMessage = "";

		function create() {
 			vm.errorMessage = "";

 			PetsAdoService.create (vm.pet).then(onSuccess,onFailure);

			function onSuccess(){
				$uibModalInstance.close(vm.pet);
			};

			function onFailure(error) {
				vm.errorMessage = error.data.message;
			};
		};

		function cancel() {
			$uibModalInstance.dismiss('cancel');
		};
	}

})();
