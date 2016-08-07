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