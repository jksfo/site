var localApp = angular.module('jksfoApp', ['ngRoute']);

// localApp.config(function($routeProvider, $locationProvider) {

localApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'partials/home.html' // ,
        // controller : mainController
    })
        .when('about', {
        templateUrl: 'partials/about.html' // ,
        // controller : mainController
    })
        .when('/contact', {
        templateUrl: 'partials/contact.html' // ,
        // controller : mainController
    })
        .otherwise({
        redirectTo: '/'
    });
}]);

// use the HTML5 History API
// $locationProvider.html5Mode(true);

// create the controller and inject Angular's $scope
// jksfoApp.controller('mainController', function($scope) {
// create a message to display in our view
//  $scope.content = 'Yummy, I am home!';

// }); 
//});