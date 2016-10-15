(function() {
    'use strict';

    var module = angular.module('myApp.home');

    /** @ngInject */
    function HomeController() {

    }

    module.component('appHome', {
        templateUrl: 'app/components/home/home.html',
        controller: HomeController,
        bindings: {

        }
    });

})();
