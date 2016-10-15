(function() {
    'use strict';

    var module = angular.module('myApp.shared');

    var apiUrl = 'http://localhost:4000';


    /** @ngInject */
    function CoursesService($http, $q) {
        return {
            fetchAll: fetchAll,
            fetch: fetch,
            create: create,
            update: update,
            remove: remove
        };

        function fetchAll() {
            return $http.get(apiUrl+'/courses')
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                        console.error('Error while fetching');
                        return $q.reject(errResponse);
                    }
                );
        }

        function fetch(id) {
            return $http.get(apiUrl+'/courses/'+id)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                        console.error('Error while fetching');
                        return $q.reject(errResponse);
                    }
                );
        }

        function create(course){
            return $http.post(apiUrl+'/courses', course)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                        console.error('Error while creating');
                        return $q.reject(errResponse);
                    }
                );
        }

        function update(course, id){
            return $http.put(apiUrl+'/courses/'+id, course)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                        console.error('Error while updating');
                        return $q.reject(errResponse);
                    }
                );
        }

        function remove(id){
            return $http.delete(apiUrl+'/courses/'+id)
                .then(
                    function(response){
                        return response.data;
                    },
                    function(errResponse){
                        console.error('Error while deleting');
                        return $q.reject(errResponse);
                    }
                );
        }
    }

    module.factory('CoursesService', CoursesService);

})();

