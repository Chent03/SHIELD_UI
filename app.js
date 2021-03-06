angular.module('shield', ['ui.bootstrap','ui.router','ngAnimate', 'ngCookies']);

angular.module('shield').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login-partial', {
        url: '/login',
        templateUrl: 'partial/login-partial/login-partial.html'
    });
    $stateProvider.state('dashboard-partial', {
        url: '/dashboard',
        templateUrl: 'partial/dashboard-partial/dashboard-partial.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('shield').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
