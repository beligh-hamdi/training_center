(function() {
    'use strict';

    var module = angular.module('myApp.main', []);

    /** @ngInject */
    function MainController() {

        var $ctrl = this;

        $ctrl.links = [{id:1},{id:2}];


    }

    module.component('appMain', {
        templateUrl: 'app/components/main/main.html',
        controller: MainController,
        bindings: {
            hero: '='
        }
    });

})();
