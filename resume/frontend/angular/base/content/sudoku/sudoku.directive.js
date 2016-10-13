(function () {

    "use-strict";

    angular.module('app.content.sudoku', [])
        .directive('sudoku', resumeSudokuDirective);

    resumeSudokuDirective.$inject = [];

    function resumeSudokuDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/base/content/sudoku/sudoku.directive.html',
            controllerAs: 'vm',
            controller: resumeSudokuController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeSudokuController.$inject = [];
    
    function resumeSudokuController() {
        var vm = this;

        vm.makeRange = makeRange;
        vm.size = 3;
        vm.board = generateBoard()

        function makeRange(start, end) {
            if (end == undefined) {
                var arr = new Array(start);
                end = start;
                start = 0;
            } else {
                var arr = new Array(end - start);
            }
            for (var i = start; i < end; i++) {
                arr[i] = i;
            }
            return arr;
        }

        function generateBoard() {
            vm.board = [];
            // for (var i = 0; i < vm.size; i++) {
            //     for (var i in makeRange(1, vm.size * vm.size)) {

            //     }
            // }
        }
    }
})();