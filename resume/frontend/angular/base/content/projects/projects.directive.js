(function () {

    "use-strict";

    angular.module('app.content.projects', [])
        .directive('resumeProjects', resumeProjectsDirective);

    resumeProjectsDirective.$inject = [];

    function resumeProjectsDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/base/content/projects/projects.directive.html',
            controllerAs: 'vm',
            controller: resumeProjectsController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeProjectsController.$inject = [];
    
    function resumeProjectsController() {
        var vm = this;
    }
})();