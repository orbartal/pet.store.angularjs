(function () {
    'use strict';

    angular
        .module('petStoreApp')
        .controller('HelloCtrl', HelloCtrl);

    HelloCtrl.$inject = ['HelloAdoService'];
    function HelloCtrl(HelloAdoService) {
        var vm = this;
        vm.modelHello = 'modelHello';
        vm.modelHelloFromService = 'waiting';
        vm.modelMessage = 'waiting';
        init ();

        function init() {
       			HelloAdoService.get ().then(onSuccess,onFailure);

      			function onSuccess(data){
              vm.modelHelloFromService = data.message;
      				vm.modelMessage = 'success';
      			};

      			function onFailure(error) {
      				vm.modelMessage = error.data.message;
      			};
    		};

    }
})();
