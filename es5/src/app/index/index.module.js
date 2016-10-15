(function() {
    'use strict';

    angular
        .module('myApp', [
            'myApp.main',
            'myApp.navbar',
            'myApp.home',
            'myApp.about',
            'myApp.courses',
            'myApp.shared',

            'ngAnimate',
            'ngCookies',
            'ngSanitize',
            'ngResource',
            'ui.router'
        ]);
})();
