(function () {

    "use-strict";

    angular.module('app.content.languages', [])
        .directive('resumeLanguages', resumeLanguagesDirective);

    resumeLanguagesDirective.$inject = [];

    function resumeLanguagesDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/content/languages/languages.directive.html',
            controllerAs: 'vm',
            controller: resumeLanguagesController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeLanguagesController.$inject = [];
    
    function resumeLanguagesController() {
        var vm = this;
    }
})();