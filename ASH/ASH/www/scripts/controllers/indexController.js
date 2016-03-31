(function () {
    "use strict";

    angular.module("app").controller("indexController", indexController);

    function indexController() {
        var vm = this;
        vm.date = "11/14/2015";
        vm.name = "St. Noel's Banquet Center";
        vm.address = "35200 Chardon Rd";
        vm.city = "Willoughby Hills";
        vm.state = "OH";
        vm.zipCode = "44094";
    }
})();