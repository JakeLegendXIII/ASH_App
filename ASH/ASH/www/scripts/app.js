(function () {
    "use strict";

    angular.module("app", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
            controller: "indexController",
            controllerAs: "vm",
            templateUrl: "scripts/controllers/indexView.html"
        });
        $routeProvider.otherwise({ redirectTo: "/" });
    });
})();
