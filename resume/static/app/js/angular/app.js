(function() {
    angular.module('app', [
        'ui.router',
        'ngAnimate',
        'ui.bootstrap',
        'vsGoogleAutocomplete',

        'layout',
        'resume',
        'services',
        'app.sidenav',
        'app.topnav',
        'app.content'
        ]);
})();