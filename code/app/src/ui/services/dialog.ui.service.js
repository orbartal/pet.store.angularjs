(function () {
  'use strict';

  angular
    .module('petStoreApp')
    .service('DialogUiService', DialogUiService);

    DialogUiService.$inject = ['$uibModal', 'toaster'];
    function DialogUiService ($uibModal, toaster) {
        var service = {};
        service.runUiModal = runUiModal;
        return service;

        function runUiModal (strTemplateUrl, strController, objResolver, objSuccess) {
            var modalInstance = getUiModal(strTemplateUrl, strController, objResolver);
            modalInstance.result.then(onConfirm, onCancel);

            function onConfirm(data){
              modalInstance.close();
              toaster.success(objSuccess);
            }
            function onCancel (data){}
        }

        function getUiModal (strTemplateUrl, strController, objResolver) {
            var modalInstance = $uibModal.open({
                  backdrop : 'static',
                  size: "lg",
                  templateUrl: strTemplateUrl,
                  controller: strController,
                  resolve: objResolver
            });
            return modalInstance;
        }

	}//DialogUiService
})();
