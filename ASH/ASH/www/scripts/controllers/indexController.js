(function () {
    "use strict";

    var place = ""
    var startDate;
    var endDate;
    var title;
    var location;
    angular.module("app").controller("indexController", indexController);

    function indexController() {
        var vm = this;
        vm.date = "5/7/2016";
        vm.time = "18:00:00";
        vm.endTime = "20:00:00";
        vm.name = "7th Annual Blue Jean Ball"
        vm.location = "St. Noel's Banquet Facilities";
        vm.address = "35200 Chardon Rd";
        vm.city = "Willoughby Hills";
        vm.state = "OH";
        vm.zipCode = "44094";

        place = vm.address + " " + vm.city + ", " + vm.state;
        title = "ASH " + vm.name;
        location = vm.location;
        //eventService.getEvents
        //.then(function (event) {
        //    vm.event = event;
        //    place = vm.event.location + vm.event.city + ", " + vm.event.state;
        //}, function (event) {
        //    navigator.notification.alert("Failed");
        //});
        var sd = vm.date + " " + vm.time;
        var ed = vm.date + " " + vm.endTime;
        startDate = new Date(sd);
        endDate = new Date(ed);

        document.addEventListener('backbutton', onDeviceBackButtonIndex, false);
        document.getElementById('getdirections').addEventListener('click', getDirections);
        document.getElementById('downloadreminder').addEventListener('click', downloadReminderPrompt);
    }

    function onDeviceBackButtonIndex(args) {
        navigator.notification.confirm('Do you want to exit the application?',
        onConfirm, 'Exit', 'Yes, No');
    }

    function onConfirm(buttonIndex) {
        if (buttonIndex === 1) {
            navigator.app.exitApp();
        }
    }

    function getDirections() {
        //navigator.notification.alert('Directions!');
        launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
            var app;
            if (isAvailable) {
                app = launchnavigator.APP.GOOGLE_MAPS;
            } else {
                console.warn("Google Maps not available - falling back to user selection");
                app = launchnavigator.APP.USER_SELECT;
            }
            launchnavigator.navigate(place, {
                app: app
            });
        });
    }

    function downloadReminderPrompt() {
        navigator.notification.confirm('Do you want to download the reminder?',
       downloadReminder, 'Access Calendar', 'Yes, No');
    }

    function downloadReminder(buttonIndex) {
        if (buttonIndex === 1) {
            try {
                window.plugins.calendar.createEvent(title, location, "", startDate, endDate);         
                //Tell user
                navigator.notification.alert('Reminder is downloaded!');
            }
            catch (err) {
                navigator.notification.alert('An Error occurred. Unable to download reminder for this device.');
            }
        }
       
    }
})();