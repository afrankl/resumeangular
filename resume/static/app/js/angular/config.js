(function() {

    "use-strict";

    angular.module('app')
        .config(statesConfig)
        .run(navConfig);

    statesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function statesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

    navConfig.$inject = ['$rootScope', '$window', 'navigation'];

    function navConfig($rootScope, $window, navigation) {
        $rootScope.currentWidth = $window.innerWidth;
        if ($rootScope.currentWidth >= 768) {
            navigation.side.expand();
        } else {
            navigation.side.collapse();
        }
        angular.element($window).bind('resize', function() {
            var width = $window.innerWidth;
            var visible = navigation.side.isVisible();
            if (width < 768 && visible || width >= 768 && !visible) {
                navigation.side.setVisibility(!visible);
                $rootScope.$apply();
            }
        })
    }
})();
