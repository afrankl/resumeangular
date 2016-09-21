(function () {

    "use-strict";

    angular.module('app.content.home', [])
        .directive('resumeHome', resumeHomeDirective);

    resumeHomeDirective.$inject = [];

    function resumeHomeDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/base/content/home/home.directive.html',
            controllerAs: 'vm',
            controller: resumeHomeController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeHomeController.$inject = [];
    
    function resumeHomeController() {
        var vm = this;
        vm.redirectToSref = redirectToSref;

        function redirectToSref(stateName) {
            $state.go(stateName);
        }
    }
})();