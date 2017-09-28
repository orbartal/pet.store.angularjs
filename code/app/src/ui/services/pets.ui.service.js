(function () {
  'use strict';

  angular
    .module('petStoreApp')
    .service('PetsUiService', PetsUiService);

    PetsUiService.$inject = ['$uibModal', 'toaster', 'DialogUiService'];
    function PetsUiService($uibModal, toaster, DialogUiService) {
        var service = {};
        service.onCreate = onCreate;
        service.onRead = onRead;
        service.onDelete = onDelete;
        return service;

        function onCreate() {
          var objResolver =  {};
          var strTemplateUrl =  '/app/src/ui/modals/pets/create/pet.create.modal.html';
          var strController =  "PetCreateModalCtrl as vm";
          var objSuccess = {title: "Create pet successfully", body:""};
          DialogUiService.runUiModal(strTemplateUrl, strController, objResolver, objSuccess);
        }

        function onRead() {
          var objResolver =  {};
          var strTemplateUrl =  '/app/src/ui/modals/pets/read/pet.read.modal.html';
          var strController =  "PeReadeModalCtrl as vm";
          var objSuccess = {title: "Read pet successfully", body:""};
          DialogUiService.runUiModal(strTemplateUrl, strController, objResolver, objSuccess);
        }

        function onDelete() {
          var objResolver =  {};
          var strTemplateUrl =  '/app/src/ui/modals/pets/delete/pet.delete.modal.html';
          var strController =  "PetDeleteModalCtrl as vm";
          var objSuccess = {title: "Delete pet successfully", body:""};
          DialogUiService.runUiModal(strTemplateUrl, strController, objResolver, objSuccess);
        }
    }
})();
