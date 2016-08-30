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
            return('WhereDatDataIs')
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