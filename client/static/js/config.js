/**
 * Created by peachteaboba on 03/08/19
 */

// Create Angular App
let app = angular.module("myApp", ['ngRoute']);

// Configure Angular Routes
app.config(["$routeProvider", "$locationProvider", "$httpProvider", function ($routeProvider, $locationProvider) {

    // Define routes
    $routeProvider
        .when('/', {
            templateUrl: 'static/partials/main.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: '/'
        });

    // Use the HTML5 History API
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

}]);