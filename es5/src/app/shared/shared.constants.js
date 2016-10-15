/* global malarkey:false, toastr:false, moment:false */
(function() {
    'use strict';

    angular.module('myApp.shared')
        .constant('TRANSLATIONS_PATH', './app/shared/i18n/')
        .constant('API_URL', 'http://localhost:4000');

})();
