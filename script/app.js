var myApp = angular.module('myModule', ['ui.bootstrap', 'ngRoute'])


myApp.run(function ($rootScope) {

    console.log("App started");

    $rootScope.showLoader = function () {
        $rootScope.isShowLoader = true;
    }

    $rootScope.hideLoader = function () {
        $rootScope.isShowLoader = false;
    }


});


myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/users", {
            templateUrl: "./template/pages/userList.html",
            controller: 'listUserController'
        })
        .when("/contact", {
            templateUrl: "./template/pages/contact.html",
            controller: 'contactController'
        })
        .otherwise({
            templateUrl: "./template/pages/userList.html",
            controller: 'listUserController'
        });;
});