(function () {
    'use strict';

    angular
        .module('app')
        .factory('eventService', eventService);

    eventService.$inject = ['$http', '$location', '$q'];

    function eventService($http, $location, $q) {
        //var defer = $q.defer();

        var service = {
            getEvents: getEvents,
        };

        return service;

        function getEvents() {
            return $http.get('http://192.168.174.143:8080/api/events')
            //return $http.get('http://events.andrewsspiritofhope.org:8080/api/events')
                .then(getEventsComplete)
                .catch(function (message) {
                    console.log('Failed');
                    $location.url('/');
                });

            function getEventsComplete(data, status, headers, config) {
                console.log(data);
                //defer.resolve(data);
                //return defer.promise;
                return data;
            }
        }
    }
})();