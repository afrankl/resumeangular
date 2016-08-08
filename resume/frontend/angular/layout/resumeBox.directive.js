(function () {

    "use-strict";

    angular.module('layout', [])
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

    resumeEducationController.$inject = [];
    
    function resumeEducationController() {
        var vm = this;
    }
})();