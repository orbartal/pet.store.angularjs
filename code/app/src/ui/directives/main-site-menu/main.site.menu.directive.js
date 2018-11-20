(function () {
    'use strict';

    angular
        .module('petStoreApp')
        .directive('mainSiteMenu', ['$state', 'AuthenticationService', mainSiteMenu]);

    function mainSiteMenu($state, AuthenticationService){
        var directive = {};
        directive.restrict = 'E';
        directive.scope =  {isRtl : '=',};
        directive.templateUrl = '/app/src/ui/directives/main-site-menu/main.site.menu.directive.html';
        directive.replace = true;
        directive.controller = MainSiteMenuController;  //Leval 1 function
        return directive;

        function MainSiteMenuController($scope){
            $scope.getUserName = getUserName;
            $scope.logout = logout;
            $scope.login = login;

            function getUserName (){
                return AuthenticationService.getUser ();
            }

            function logout (){
                AuthenticationService.clearCredentials();
            }

            function login(){
                $state.go("login");
            }

        } //End MainSiteMenuController


    }//End MainSiteMenu
})();
