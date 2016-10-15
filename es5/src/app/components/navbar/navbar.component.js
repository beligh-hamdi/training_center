(function() {
    'use strict';

    var module = angular.module('myApp.navbar', []);

    /** @ngInject */
    function NavbarController($translate, $state, $rootScope) {

        var $ctrl = this;

        $ctrl.$state = $state;
        $ctrl.isNavCollapsed = true;
        $ctrl.userRole = $rootScope.userRole;
        $ctrl.currentLanguage = $translate.use();

        $ctrl.$onInit = function() {
           // console.log($ctrl.urlLinks);
        };

        $ctrl.setLang = function(langKey) {
            $translate.use(langKey).then(function () {
               // $scope.hello = $translate.instant('HELLO');
                $ctrl.currentLanguage = $translate.use();
            });
        };

        $ctrl.setRole = function(role) {
            $rootScope.userRole = role;
            $ctrl.userRole = $rootScope.userRole;

            $rootScope.$broadcast('userRoleChanges', { userRole:  $ctrl.userRole});
        };
    }

    module.component('appNavbar', {
        templateUrl: 'app/components/navbar/navbar.html',
        controller: NavbarController,
        bindings: {

        }
    });

})();



