(function() {
    'use strict';

    angular
        .module('myApp', [
            'myApp.main',
            'myApp.navbar',
            'myApp.home',
            'myApp.about',

            'ngAnimate',
            'ngCookies',
            'ngSanitize',
            'ngResource',
            'ui.router'
        ]);
})();
