(function() {
    'use strict';

    var module = angular.module('myApp.courses');

    /** @ngInject */
    function CourseController(CoursesService, $stateParams, $rootScope) {

        var $ctrl = this;

        $ctrl.course = {};
        $ctrl.userRole = $rootScope.userRole;
        $ctrl.actionMode = false;

        $rootScope.$on('userRoleChanges', function(event, args) {
            $ctrl.userRole = args.userRole;
        });

        $ctrl.$onInit = function() {
            fetch();
        };

        $ctrl.onSubmitCourse = onSubmitCourse;
        $ctrl.onUpdateCourse = onUpdateCourse;
        $ctrl.onDeleteCourse = onDeleteCourse;

        $ctrl.onNewCourse = onNewCourse;
        $ctrl.onDetailCourse = onDetailCourse;

        function onNewCourse() {
            $ctrl.course = {};
            $ctrl.actionMode = 'newCourse';
        }

        function onDetailCourse() {
            fetch();
            $ctrl.actionMode = 'updateCourse';
        }

        function onSubmitCourse() {
            var img = 'https://placeholdit.imgix.net/~text?txtsize=80&txt='+$ctrl.course.title+'&w=500&h=500';
            var course = {title: $ctrl.course.title, description: $ctrl.course.description, img: img};
            CoursesService.create(course).then(function(data) {
                $ctrl.course = {};
            }, function(errorResponse) {
                console.log(errorResponse);
            });
        }

        function onUpdateCourse() {
            var img = 'https://placeholdit.imgix.net/~text?txtsize=80&txt='+$ctrl.course.title+'&w=500&h=500';
            var course = {title: $ctrl.course.title, description: $ctrl.course.description, img: img};
            var id = $ctrl.course.id;
            CoursesService.update(course, id).then(function(data) {
                $ctrl.course = data;
            }, function(errorResponse) {
                console.log(errorResponse);
            });
        }

        function onDeleteCourse() {
            var id = $ctrl.course.id;
            CoursesService.remove(id).then(function(data) {
                $ctrl.course = {};
            }, function(errorResponse) {
                console.log(errorResponse);
            });
        }

        function fetch() {
            var id = $stateParams.id;
            CoursesService.fetch(id).then(function(data) {
                $ctrl.course = data;
            }, function(errorResponse) {
                console.log(errorResponse);
            });
        }

    }

    module.component('appCourse', {
        templateUrl: 'app/components/courses/course.html',
        controller: CourseController,
        bindings: {

        }
    });

})();
