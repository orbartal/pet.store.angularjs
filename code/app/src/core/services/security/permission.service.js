(function () {
  'use strict';

  angular
    .module('petStoreApp')
    .service('PermissionService', PermissionService);

    PermissionService.$inject = ['PermPermissionStore', 'AuthenticationService'];
    function PermissionService(PermPermissionStore, AuthenticationService) {
  		//Variables
  		var vm = this;
      vm.setConfig = setConfig ;

      function setConfig(){
            //	PermissionStore.clearStore();
           PermPermissionStore.definePermission('anonymous', isAnonymous);

            function isAnonymous (stateParams) {
               var isAnonymous  = !AuthenticationService.getUser();
               return isAnonymous;
            }//End configPermissionStore
         }//End configPermissionStore
	}
})();
