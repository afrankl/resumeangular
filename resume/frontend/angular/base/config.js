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
        navigation.window.size.set($window.innerWidth)
        if ($window.innerWidth >= 768) {
            navigation.side.expand();
        } else {
            navigation.side.collapse();
        }
        angular.element($window).bind('resize', function() {
            var oldWidth = navigation.window.size.get();
            var newWidth = $window.innerWidth;
            var visible = navigation.side.isVisible();
            var windowShrinking = newWidth < 768 && visible && oldWidth > newWidth;
            var windowExpanding = newWidth >= 768 && !visible && newWidth > oldWidth;
            if (windowShrinking || windowExpanding) {
                navigation.side.setVisibility(!visible);
                $rootScope.$apply();
            }
            navigation.window.size.set($window.innerWidth);
        })
    }
})();
