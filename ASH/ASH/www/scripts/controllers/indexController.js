(function () {
    "use strict";

    angular.module("app").controller("indexController", indexController);

    // indexController.$inject = ['$location', '$rootScope', '$timeout', 'deviceService', 'modalService']; $location, $rootScope, $timeout, deviceService, modalService

    function indexController() {
        var vm = this;
        vm.date = "11/14/2015";
        vm.name = "6th Annual Blue Jean Ball"
        vm.location = "St. Noel's Banquet Center";
        vm.address = "35200 Chardon Rd";
        vm.city = "Willoughby Hills";
        vm.state = "OH";
        vm.zipCode = "44094";

        //activate();
        //function activate() {
        //    deviceService.defaultBackButtonHandler = onDeviceBackButton;
        //}

        //function onDeviceBackButton(args) {
        //    $timeout(function () {
        //        modalService.showModal(function (option) {
        //            if (option == modalService.YES) {
        //                deviceService.exitApplication();
        //            }
        //        },
        //        {
        //            buttons: modalService.YES | modalService.NO,
        //            message: 'Do you want to quit the application?',
        //            title: 'Close Application'
        //        });
        //    }, 1);
        //}
    }
})();