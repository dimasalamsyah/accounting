var firebaseUrl = "https://studystupid-49162.firebaseio.com/";

var app = angular.module("MyApp", ["ngRoute", "firebase"]);


app.config(function($routeProvider) {
    $routeProvider
    .when("/aa", {
        templateUrl : "templates/home.html",
        controller : "homeCtrl"
    })
    .when("/login", {
        templateUrl : "templates/login.html",
        controller : "loginCtrl"
    })
    .when("/home", {
        templateUrl : "templates/home.html",
        controller : "homeCtrl"
    })
    .when("/accounting", {
        templateUrl : "templates/accounting.html",
        controller : "accountingCtrl"
    })
    .when("/about", {
        templateUrl : "templates/about.html",
        controller : "aboutCtrl"
    })
    ;
});
