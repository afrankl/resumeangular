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
