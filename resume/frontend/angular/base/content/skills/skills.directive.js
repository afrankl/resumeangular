(function () {

    "use-strict";

    angular.module('app.content.skills', [])
        .directive('resumeSkills', resumeSkillsDirective);

    resumeSkillsDirective.$inject = [];

    function resumeSkillsDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/content/skills/skills.directive.html',
            controllerAs: 'vm',
            controller: resumeSkillsController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeSkillsController.$inject = [];
    
    function resumeSkillsController() {
        var vm = this;
    }
})();