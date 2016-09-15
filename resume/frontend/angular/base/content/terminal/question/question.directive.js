(function () {

    "use-strict";

    angular.module('app.content.terminal.question', [])
        .directive('question', questionDirective);

    questionDirective.$inject = [];

    function questionDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/base/content/terminal/question/question.directive.html',
            controllerAs: 'vm',
            controller: questionController,
            scope: {},
            bindToController: {
                questionObject: '=',
                studentMode: '='
            },
            transclude: false,
        };
    }

    questionController.$inject = ['$scope'];
    
    function questionController($scope) {
        var vm = this;
    }
})();