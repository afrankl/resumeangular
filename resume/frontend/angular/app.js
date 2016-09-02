(function() {
    angular.module('app', [
        'ui.router',
        'ngAnimate',
        'ui.bootstrap',

        'layout',
        'resume',
        'app.sidenav',
        'app.topnav',
        'app.content'
        ]);
})();