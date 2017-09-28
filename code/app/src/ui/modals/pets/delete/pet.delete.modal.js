(function () {
    'use strict';

	angular
		.module('petStoreApp')
		.controller('PetDeleteModalCtrl', ['$uibModalInstance', 'PetsAdoService', PetDeleteModalCtrl]);

	function PetDeleteModalCtrl($uibModalInstance, PetsAdoService) {
		var vm = this;
    vm.id = 1;
		vm.ok = ok;
		vm.cancel = cancel;
		vm.errorMessage = "";

		function ok() {
      vm.errorMessage = "";

			PetsAdoService.delete(vm.id).then(onSuccess, onFailure);

			function onSuccess() {
				$uibModalInstance.close();
			}

			function onFailure(error) {
				vm.errorMessage = error.data.message;
			}
		}

		function cancel() {
			$uibModalInstance.dismiss('cancel');
		}
	}

})();
