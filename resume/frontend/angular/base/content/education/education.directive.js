(function () {

    "use-strict";

    angular.module('app.content.education', [])
        .directive('resumeEducation', resumeEducationDirective);

    resumeEducationDirective.$inject = [];

    function resumeEducationDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/content/education/education.directive.html',
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