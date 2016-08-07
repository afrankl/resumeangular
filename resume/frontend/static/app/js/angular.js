(function() {

    "use-strict";

    angular.module('app', [
        'ui.router', 

        'app.sidenav',
        'app.topnav',
        ])
        .config(baseConfig);

    function baseConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                'url': '/home',
                'templateUrl': '/static/app/templates/content/home/home.html'
            })
    }
})();

(function (){
    "use-strict";

    angular.module('app.sidenav', [])
        .directive('resumeSideNav', resumeSideNavDirective);

    function resumeSideNavDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/sidenav/sidenav.directive.html',
            controllerAs: 'vm',
            controller: resumeSideNavController,
            scope: {},
            transclude: true,
            bind: {}
        }
    }

    resumeSideNavController.$inject = ['$state', '$rootScope'];

    function resumeSideNavController($state, $rootScope) {
        var vm = this;
    }
})();
(function () {

    "use-strict";

    angular.module('app.topnav', [])
        .directive('resumeTopNav', resumeTopNavDirective);

    function resumeTopNavDirective(){
        return {
            restrict: 'EA',
            templateUrl: '/static/app/templates/topnav/topnav.directive.html',
            controllerAs: 'vm',
            controller: resumeTopNavController,
            scope: {},
            bind: {},
            transclude: true
        }
    }

    resumeTopNavController.$inject = ['$state']

    function resumeTopNavController($state) {
        var vm = this;
    }
})();
