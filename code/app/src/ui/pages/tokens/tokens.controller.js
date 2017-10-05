(function () {
    'use strict';

    angular
        .module('petStoreApp')
        .controller('TokensCtrl', TokensCtrl);

    TokensCtrl.$inject = ['TokensAdoService'];
    function TokensCtrl(TokensAdoService) {
        var vm = this;
        vm.modelToken = 'modelToken';
        vm.modelTokenFromService = 'empty';
        vm.modelMessage = 'waiting';

        vm.modelTokenFromService2 = 'empty';
        vm.modelMessage2 = 'waiting';

        vm.modelChangeByButton = "before";
        vm.onButtonClick = onButtonClick;
        init ();

        function onButtonClick () {
          vm.modelChangeByButton = "after";
        }


        function init() {
            getByNothing();
            getByPassword();
    		};

        function getByNothing() {
          TokensAdoService.getByNothing ().then(onSuccess,onFailure);

          function onSuccess(responce){
            vm.modelTokenFromService = responce.data.token;
            vm.modelMessage = 'success';
          };

          function onFailure(error) {
            vm.modelMessage = error.data.message;
          };
        }

        function getByPassword() {
          TokensAdoService.getByPassword ('admin' , 'admin').then(onSuccess,onFailure);

          function onSuccess(responce){
            vm.modelTokenFromService2 = responce.data.token;
            vm.modelMessage2 = 'success';
          };

          function onFailure(error) {
            vm.modelMessage2 = error.data.message;
          };
        }



    }
})();
