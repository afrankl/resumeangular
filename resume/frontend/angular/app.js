(function() {
    angular.module('app', [
        'ui.router',
        'ngAnimate',

        'layout',
        'app.sidenav',
        'app.topnav',
        'app.content'
        ]);
})();