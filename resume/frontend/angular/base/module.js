(function() {

    "use-strict";

    angular.module('app')
        .config(statesConfig)
        .run(navConfig);

    statesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function statesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        // $locationProvider.html5Mode(true);

    }

    navConfig.$inject = ['$rootScope'];

    function navConfig($rootScope) {
        $rootScope.navOpen = true;
    }
})();
