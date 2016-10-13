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

    resumeSudokuController.$inject = ['$scope'];
    
    function resumeSudokuController($scope) {
        var vm = this;

        vm.makeRange = makeRange;
        vm.size = 3;
        generateBoard()

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
            vm.board = new Array(vm.size * vm.size);
            for (var i = 0; i < vm.size * vm.size; i++) {
                vm.board[i] = {};
                for (var j in makeRange(1, vm.size * vm.size + 1)) {
                    vm.board[i][j] = ' ';
                }
            }
        }

        function generatePossibilities(all) {
            
        }
    }
})();