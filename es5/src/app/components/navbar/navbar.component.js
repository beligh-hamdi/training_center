(function() {
    'use strict';

    var module = angular.module('myApp.navbar', []);

    /** @ngInject */
    function NavbarController() {

        var $ctrl = this;

        $ctrl.$onInit = function() {
            console.log($ctrl.urlLinks);


        };

    }

    module.component('appNavbar', {
        templateUrl: 'app/components/navbar/navbar.html',
        controller: NavbarController,
        bindings: {
            urlLinks: '<'
        }
    });

})();



