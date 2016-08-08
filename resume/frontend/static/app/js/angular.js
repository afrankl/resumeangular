(function() {
    angular.module('app', [
        'ui.router', 

        'app.sidenav',
        'app.topnav',
        ]);
})();
(function() {

    "use-strict";

    angular.module('app')
        .config(statesConfig)
        .run(navConfig);

    statesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function statesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                'url': '/home',
                'templateUrl': '/static/app/templates/content/home/home.html'
            });
    }

    navConfig.$inject = ['$rootScope'];

    function navConfig($rootScope) {
        $rootScope.navOpen = false;
    }
})();

(function (){
    "use-strict";

    angular.module('app.sidenav', [])
        .directive('resumeSideNav', resumeSideNavDirective);

    resumeSideNavDirective.$inject = ['$rootScope'];

    function resumeSideNavDirective($rootScope) {
        console.log('resumeSideNav');
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/sidenav/sidenav.directive.html',
            controllerAs: 'vm',
            controller: resumeSideNavController,
            scope: {},
            transclude: true,
            bind: {},
            link: function(scope, element, attrs, ctrl) {
                $rootScope.$watch('navOpen', function(newVal, oldVal){
                    ctrl.navOpen = newVal;
                });
            }
        }
    }

    resumeSideNavController.$inject = ['$state', '$rootScope'];

    function resumeSideNavController($state, $rootScope) {
        var vm = this;
        vm.navOpen = $rootScope.navOpen;
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
            transclude: true,
        }
    }

    resumeTopNavController.$inject = ['$state', '$rootScope']
    function resumeTopNavController($state, $rootScope) {
        var vm = this;

        //functions
        vm.menuClicked = menuClicked;

        function menuClicked() {
            $rootScope.navOpen = !$rootScope.navOpen;
        }
    }
})();
