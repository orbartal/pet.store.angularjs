(function () {
    'use strict';

    angular
        .module('petStoreApp')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['LoginService'];
    function LoginCtrl(LoginService) {
        var vm = this;
        vm.login = login;

        function login() {
          LoginService.login(vm.username, vm.password).then(onSuccess,onFailure);

          function onSuccess(){
            vm.errorMessage = 'Success';
    			};

    			function onFailure(error) {
    				vm.errorMessage = error.data.message;
    			};
        }
    }
})();
