/* global toastr:false */
(function() {
    'use strict';

    var module = angular.module('myApp.shared');


    /** @ngInject */
    function CoursesService($http, $q, API_URL) {
        return {
            fetchAll: fetchAll,
            fetch: fetch,
            create: create,
            update: update,
            remove: remove
        };

        function fetchAll() {
            return $http.get(API_URL+'/courses')
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                       // console.error('Error while fetching');
                        toastr.error('Error while fetching');
                        return $q.reject(errResponse);
                    }
                );
        }

        function fetch(id) {
            return $http.get(API_URL+'/courses/'+id)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                       // console.error('Error while fetching');
                        toastr.error('Error while fetching');
                        return $q.reject(errResponse);
                    }
                );
        }

        function create(course){
            return $http.post(API_URL+'/courses', course)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                        //console.error('Error while creating');
                        toastr.error('Error while creating');
                        return $q.reject(errResponse);
                    }
                );
        }

        function update(course, id){
            return $http.put(API_URL+'/courses/'+id, course)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                       // console.error('Error while updating');
                        toastr.error('Error while updating');
                        return $q.reject(errResponse);
                    }
                );
        }

        function remove(id){
            return $http.delete(API_URL+'/courses/'+id)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                       // console.error('Error while deleting');
                        toastr.error('Error while deleting');
                        return $q.reject(errResponse);
                    }
                );
        }
    }

    module.factory('CoursesService', CoursesService);

})();

