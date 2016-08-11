(function() {
    angular.module('app', [
        'ui.router',
        'ngAnimate',

        'layout',
        'resume',
        'app.sidenav',
        'app.topnav',
        'app.content'
        ]);
})();