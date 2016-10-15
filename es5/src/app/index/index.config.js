(function() {
    'use strict';

    angular
        .module('myApp.shared')
        .config(config);

    /** @ngInject */
    function config($translateProvider, TRANSLATIONS_PATH) {

        $translateProvider.useStaticFilesLoader({
            prefix: TRANSLATIONS_PATH,
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('fr');
        $translateProvider.useSanitizeValueStrategy('sanitize');

    }

})();
