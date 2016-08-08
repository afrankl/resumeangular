(function () {

    "use-strict";

    angular.module('app.content.work', [])
        .directive('resumeWork', resumeWorkDirective);

    resumeWorkDirective.$inject = [];

    function resumeWorkDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/content/work/work.directive.html',
            controllerAs: 'vm',
            controller: resumeWorkController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeWorkController.$inject = [];
    
    function resumeWorkController() {
        var vm = this;
    }
})();