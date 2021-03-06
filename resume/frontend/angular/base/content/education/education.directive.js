(function () {

    "use-strict";

    angular.module('app.content.education', [])
        .directive('resumeEducation', resumeEducationDirective);

    resumeEducationDirective.$inject = [];

    function resumeEducationDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/base/content/education/education.directive.html',
            controllerAs: 'vm',
            controller: resumeEducationController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeEducationController.$inject = ['$state'];
    
    function resumeEducationController($state) {
        var vm = this;

        vm.redirectToSref = redirectToSref;

        function redirectToSref(stateName) {
            $state.go(stateName);
        }
    }
})();