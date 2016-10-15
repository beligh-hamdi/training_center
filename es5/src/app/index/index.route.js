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
            })
            .state('courses', {
                url: '/courses',
                template: '<app-courses/>'
            })
            .state('course', {
                url: '/courses/:id',
                template: '<app-course/>'
            });

        $urlRouterProvider.otherwise('/');
    }

    angular.module('myApp').config(routeConfig);

})();
