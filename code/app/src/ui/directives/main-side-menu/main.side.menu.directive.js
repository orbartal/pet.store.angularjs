(function () {
    'use strict';

    angular
    .module('petStoreApp')
    .directive('mainSideMenu', [mainSideMenu]);

      function mainSideMenu(){

            //Directive variables
            var directive = {};
            directive.restrict = 'E';
            directive.scope =  {isRtl : '=',};
            directive.templateUrl = '/app/src/ui/directives/main-side-menu/main.side.menu.directive.html';
            directive.replace = true;

            //Directive methods
            directive.controller = MainSideMenuController;

            return directive;
      }

      function MainSideMenuController($scope){

          $(function () {
            $('#sideMenu').metisMenu(
          		{ toggle: false}
          	);
          });

      	  $scope.$on('$stateChangeStart', onStateChange);
      }

      function onStateChange (event, toState, toParams, fromState, fromParams){
		        var stateUrl = toState.url;
		        $(findSelectedState);

		  function findSelectedState(){
			    // this will get the full URL at the address bar
			    var url = window.location.href;

			    // passes on every "a" tag
			    $("#sideMenu a").each(isSelectedState);

			    function isSelectedState () {
		            // checks if its the same on the address bar
			    	var linkUrl =  this.href.split('#')[1];
			        if(stateUrl == (linkUrl)) {
			            $(this).addClass("sidebar-nav-selected");
			            //.closest("li")
			        }else{
			        	 $(this).removeClass("sidebar-nav-selected");
			        }
			    }//isSelectedState
		  	}//findSelectedState
	   }//onStateChange
})();
