// configure our routes
tdpApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        .when('/portfolio', {
            templateUrl : 'pages/portfolio.html',
            controller  : 'portfolioController'
        })

        .when('/analytics', {
            templateUrl : 'pages/analytics.html',
            controller  : 'analyticsController'
        })

        .when('/register', {
            templateUrl : 'pages/register.html',
            controller  : 'registerController'
        })

        .when('/login', {
            templateUrl : 'pages/login.html',
            controller  : 'loginController'
        });
});

