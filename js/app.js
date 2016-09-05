var app = angular.module("MyApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/home.html",
        controller : "indexCtrl"
    })
    .when("/login", {
        templateUrl : "templates/login.html",
        controller : "loginCtrl"
    })
    .when("/home", {
        templateUrl : "templates/home.html",
        controller : "homeCtrl"
    });
});
