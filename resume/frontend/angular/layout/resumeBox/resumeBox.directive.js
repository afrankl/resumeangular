(function () {

    "use-strict";

    angular.module('layout')
        .directive('resumeBox', resumeBoxDirective);

    resumeBoxDirective.$inject = [];

    function resumeBoxDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/layout/resumeBox/resumeBox.directive.html',
            controllerAs: 'vm',
            controller: resumeBoxController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeBoxController.$inject = [];
    
    function resumeBoxController() {
        var vm = this;
    }
})();