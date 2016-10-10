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
        navigation.window.size.set($window.innerWidth);
        let overlapSize = navigation.side.overlapSize();
        if ($window.innerWidth >= overlapSize) {
            navigation.side.expand();
        } else {
            navigation.side.collapse();
        }
        angular.element($window).bind('resize', function() {
            var oldWidth = navigation.window.size.get();
            var newWidth = $window.innerWidth;
            var visible = navigation.side.isVisible();
            var windowShrinking = newWidth < overlapSize && visible && oldWidth > newWidth;
            var windowExpanding = newWidth >= overlapSize && !visible && newWidth > oldWidth;
            if (windowShrinking || windowExpanding) {
                navigation.side.setVisibility(!visible);
                $rootScope.$apply();
            }
            navigation.window.size.set($window.innerWidth);
        })
    }
})();
