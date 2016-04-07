(function () {
    "use strict";

    angular.module("app").controller("settingsController", settingsController);

    function settingsController() {
        var vm = this;
        document.addEventListener('backbutton', onDeviceBackButton, false);
    }

})();