
// var jksfoApp = angular.module('jksfoApp', ['ngRoute'], ['mgcrea.ngStrap'], ['mgcrea.ngStrap.tooltip']);
var jksfoApp = angular.module('jksfoApp', ['ngRoute', 'mgcrea.ngStrap']);

//var jksfoApp = angular.module('jksfoApp', ['ngRoute', 'ui.bootstrap']);

jksfoApp.config( ['$routeProvider', function($routeProvider) {
  $routeProvider
    // Home 
    .when('/home', {
      templateUrl: 'partials/home.html'
    })


    // Dev
    .when('/geoLocation', {
      templateUrl: 'partials/dev/geoLocation.html'
    })
    .when('/python', {
      templateUrl: 'partials/dev/python.html'
    })
      //.when('/blog', {
      //  templateUrl: 'http://joeskb.blogspot.com'
      //})
    .when('/resources', {
      templateUrl: 'partials/dev/resources.html'
    })
      //.when('/git', {
      //  templateUrl: 'https://github.com/jksfo'
      //})
      //.when('/gitSandbox', {
      //  templateUrl: 'https://github.com/jksfoTemp'
      //})
    // hr
    .when('/tsqlView', {
      templateUrl: 'partials/dev/tsqlView.html'
    })
    .when('/tsqlSP', {
      templateUrl: 'partials/dev/tsqlSP.html'
    })
    // hr
    .when('/sqlRiak', {
      templateUrl: 'partials/dev/sqlRiak.html'
    })
    .when('/sqlPostgreSQL', {
      templateUrl: 'partials/dev/sqlPostgreSQL.html'
    })
    .when('/sqlHBase', {
      templateUrl: 'partials/dev/sqlHBase.html'
    })
    .when('/sqlMongo', {
      templateUrl: 'partials/dev/sqlMongo.html'
    })
    .when('/linux', {
      templateUrl: 'partials/dev/linux.html'
    })


    // About    
    .when('/contact', {
      templateUrl: 'partials/about/contact.html'
    })
    .when('/resume', {
      templateUrl: 'partials/about/resume.html'
    })
    

    // Default - Home 
    .otherwise({
      redirectTo: '/home'
    });
  }]
);	

function DropdownCtrl($scope) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
}