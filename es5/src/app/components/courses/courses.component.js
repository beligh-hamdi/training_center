(function() {
    'use strict';

    var module = angular.module('myApp.courses');

    /** @ngInject */
    function CoursesController(CoursesService) {

        var $ctrl = this;

        $ctrl.courses = [];
        $ctrl.userRole = 'admin';

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
