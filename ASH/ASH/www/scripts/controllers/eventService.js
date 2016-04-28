(function () {
    'use strict';

    angular.module('app').factory('eventService', eventService);

    eventService.$inject = ['$http'];
    function eventService($http) {

        var events = [
            {
                date: "11/14/2015",
                time: "6:00 PM",
                endTime: "8:00 PM",
                name: "6th Annual Bluejean Ball",
                location: "St. Noel's Banquet Center",
                address: "35200 Chardon Rd",
                city: "Willoughby Hills",
                state: "OH",
                zipCode: "44094"
            }
        ];

        var getEvents = function () {
            return events;
        };

        return {
            getEvents: getEvents
        };
    }
})();