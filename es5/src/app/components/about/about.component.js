(function() {
    'use strict';

    var module = angular.module('myApp.about');

    /** @ngInject */
    function AboutController() {


        var $ctrl = this;

        $ctrl.$onInit = function() {

        };

        $ctrl.status = {
            open: false
        };

    }

    module.component('appAbout', {
        templateUrl: 'app/components/about/about.html',
        controller: AboutController,
        bindings: {

        }
    });

})();
