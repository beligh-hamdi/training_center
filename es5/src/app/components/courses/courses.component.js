(function() {
    'use strict';

    var module = angular.module('myApp.courses');

    /** @ngInject */
    function CoursesController(CoursesService, $rootScope) {

        var $ctrl = this;

        $ctrl.courses = [];
        $ctrl.userRole = $rootScope.userRole;

        $rootScope.$on('userRoleChanges', function(event, args) {
            $ctrl.userRole = args.userRole;
        });

        $ctrl.$onInit = function() {
            fetchAll();
        };

        $ctrl.onDeleteCourse = function(id) {
            remove(id);
        };

        function remove(id) {
            CoursesService.remove(id).then(function(data) {
                fetchAll();
            }, function(errorResponse) {
                console.log(errorResponse);
            });
        }

        function fetchAll() {
            CoursesService.fetchAll().then(function(data) {
                $ctrl.courses = data;
            }, function(errorResponse) {
                console.log(errorResponse);
            });
        }

    }

    module.component('appCourses', {
        templateUrl: 'app/components/courses/courses.html',
        controller: CoursesController,
        bindings: {

        }
    });

})();
