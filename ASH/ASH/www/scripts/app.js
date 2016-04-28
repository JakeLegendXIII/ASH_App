(function () {
    "use strict";

    angular.module("app", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
            controller: "indexController",
            controllerAs: "vm",
            templateUrl: "scripts/controllers/indexView.html"
        });

        //$routeProvider.when("/settings", {
        //    controller: "settingsController",
        //    controllerAs: "vm",
        //    templateUrl: "scripts/controllers/settingsView.html"
        //});

        //$routeProvider.when("/donate", {
        //    controller: "donateController",
        //    controllerAs: "vm",
        //    templateUrl: "scripts/controllers/donateView.html"
        //});

        $routeProvider.otherwise({ redirectTo: "/" });
    });
})();
