(function () {

    "use-strict";

    angular.module('resume', [])
        .directive('resume', resumeDirective);

    resumeDirective.$inject = [];

    function resumeDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/resume/resume.directive.html',
            controllerAs: 'vm',
            controller: resumeController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeController.$inject = ['$state'];
    
    function resumeController($state) {
        var vm = this;

        vm.redirectToSref = redirectToSref;
        vm.rating = 5;
        vm.max = 5;

        function redirectToSref(stateName) {
            $state.go(stateName);
        }
    }
})();