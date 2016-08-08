(function () {

    "use-strict";

    angular.module('app.content.bio', [])
        .directive('resumeBio', resumeBioDirective);

    resumeBioDirective.$inject = [];

    function resumeBioDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/content/bio/bio.directive.html',
            controllerAs: 'vm',
            controller: resumeBioController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeBioController.$inject = [];
    
    function resumeBioController() {
        var vm = this;
    }
})();