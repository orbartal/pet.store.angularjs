(function () {
    'use strict';

    angular
        .module('petStoreApp')
        .controller('PetsCtrl', PetsCtrl);

    PetsCtrl.$inject = ['PetsUiService'];
    function PetsCtrl(PetsUiService) {
        var vm = this;
        vm.currentLoginUser = null;
        init();

        function init() {
          vm.onCreate = PetsUiService.onCreate;
          vm.onRead = PetsUiService.onRead;
          vm.onDelete = PetsUiService.onDelete;
        }
    }
})();
