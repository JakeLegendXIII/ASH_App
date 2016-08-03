(function () {
    'use strict';

    angular
        .module('app')
        .controller('indexController', indexController);

    indexController.$inject = ['$q','eventService'];

    function indexController($q, eventService) {
        var vm = this;
        activate();
        vm.events = [];
        vm.isLoaded = false;
        vm.refresh = function () {
            vm.isLoaded = false;
            activate();
        }

        vm.getDirections = function getDirections(event) {
            var place = event.Address + " " + event.City + ", " + event.State;
            //console.log(place);
            launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
                var app;
                if (isAvailable) {
                    app = launchnavigator.APP.GOOGLE_MAPS;
                } else {
                    console.warn('Google Maps not available - falling back to user selection');
                    app = launchnavigator.APP.USER_SELECT;
                }
                launchnavigator.navigate(place, {
                    app: app
                });
            });
        }

        vm.downloadReminder = function downloadReminderPrompt(event) {
            var title = 'ASH ' + event.Name;
            var location = event.Location;
            var date = moment(event.Date).format('MM/DD/YYYY');
            var st = moment(event.Time).format('HH:mm:ss');
            var et = moment(event.EndTime).format('HH:mm:ss');
            var sd = date + ' ' + st;
            var ed = date + ' ' + et;
            var startDate = new Date(sd);
            var endDate = new Date(ed);
            console.log(title, location, '', date, st, et, startDate, endDate);
            navigator.notification.confirm('Do you want to download the reminder?',
           downloadReminder, 'Access Calendar', 'Yes, No');

            function downloadReminder(buttonIndex) {
                if (buttonIndex === 1) {
                    try {
                        window.plugins.calendar.createEvent(title, location, "", startDate, endDate);
                        //Tell user
                        navigator.notification.alert('Reminder is downloaded!');
                    }
                    catch (err) {
                        navigator.notification.alert('An Error occurred. Unable to download reminder for this device.');
                        console.log(err.message);
                    }
                }
            }
        }

        function activate() {
            console.log('Activated');
            var promises = [getEvents()];
            return $q.all(promises).then(function () {
                console.log('Promises Returned');
                vm.isLoaded = true;
            });
        }

        function getEvents() {
            return eventService.getEvents().then(function (data) {
                vm.events = data;
                console.log('Data Collected');
                return vm.events;
            });
        }  
    }
})();