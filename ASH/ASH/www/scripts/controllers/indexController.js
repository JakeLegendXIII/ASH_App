(function () {
    "use strict";
    var place = "";
    angular.module("app").controller("indexController", indexController);

    function indexController() {
        var vm = this;
        vm.date = "11/14/2016";
        vm.name = "7th Annual Blue Jean Ball"
        vm.location = "St. Noel's Banquet Center";
        vm.address = "35200 Chardon Rd";
        vm.city = "Willoughby Hills";
        vm.state = "OH";
        vm.zipCode = "44094";

        place = vm.location + vm.city + ", " + vm.state;
        document.addEventListener('backbutton', onDeviceBackButtonIndex, false);
        document.getElementById('getdirections').addEventListener('click', getDirections);
        document.getElementById('downloadreminder').addEventListener('click', downloadReminder);
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

    function downloadReminder() {
        navigator.notification.alert('Download Reminder!');
    }
})();