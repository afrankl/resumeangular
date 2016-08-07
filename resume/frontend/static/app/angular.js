(function() {
    angular.module('app', [
        'ui.router', 

        'app.sidenav'
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

    console.log('test');

    angular.module('app.sidenav', ['ui.router'])
        .directive('resumeSideNav', resumeSideNavDirective);

    function resumeSideNavDirective() {
        console.log('check');
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

    resumeSideNavController.$inject = ['$state'];

    function resumeSideNavController($state) {
        var vm = this;
    }
})();
