(function() {
    'use strict';

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                template: '<app-home/>'
            })
            .state('about', {
                url: '/about',
                template: '<app-about/>'
            });

        $urlRouterProvider.otherwise('/');
    }

    angular.module('myApp').config(routeConfig);

})();
