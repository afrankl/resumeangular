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
        vm.getHorizontal = getHorizontal;
        vm.getVertical = getVertical;
        vm.getLine = getLine;
        vm.size = 3;
        vm.cellPossibilities = cellPossibilities;
        vm.test = test;

        clearBoard();

        function test() {
            // console.log(allPossibilities(vm.board));
            vm.board = initBoardString("4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......");
            solve(vm.board);
        }

        function eliminateByUniquePossibility(index, possiblesGroup) {
            possiblesGroup = possiblesGroup.slice();
            var comparatorGroup = possiblesGroup.splice(index, 1)[0];
            var combinedUnion = possiblesGroup.splice(0, 1)[0];
            for (var possibles of possiblesGroup) {
                combinedUnion = combinedUnion.union(possibles);
            }
            for (p of comparatorGroup) {
                if (! combinedUnion.has(p)) {
                    return p;
                }
            }
            return false;
        }

        function eliminateBySinglePossibility(possibles) {
            if (possibles.size == 1) {
                return possibles.values().next().value;
            } else {
                return false;
            }
        }

        function quickElimination(board) {
            board = board.slice();
            var possibilityGroups = allPossibilities(board);
            // If there is an error on the board return false
            if (possibilityGroups == false) { return false; }
            var done = true;
            var set = 0;
            var col = 0;
            for (var group of possibilityGroups) {
                for (var possibles of group){
                    var correctMove = eliminateByUniquePossibility(col, group) ||
                                      eliminateBySinglePossibility(possibles);
                    if (correctMove !== false) {
                        board[set][col] = correctMove;
                        done = false;
                    }
                    col += 1;
                }
                col = 0;
                set += 1;
            }
            if (!done) {
                return quickElimination(board);
            } else {
                if (boardSolved(board)) {
                    vm.board = board;
                    return true;
                } else {
                    return board;
                }
            }
        }

        function boardSolved(board) {
            possibilityGroups = allPossibilities(board);
            for (var group of possibilityGroups) {
                for (var possibles of group) {
                    if (possibles.size > 0) {
                        return false;
                    }
                }
            }
            return true;
        }

        function makeGuess(board, possibilityGroups) {
            board = board.slice();
            var minPossibilities = vm.size * vm.size + 1;
            var mini = 0;
            var minj = 0;
            var bestGuess;
            for (var i = 0; i < possibilityGroups.length; i++) {
                for (var j = 0; j < possibilityGroups[i].length ; j++) {
                    var possibles = possibilityGroups[i][j];
                    if (possibles.size == 2) {
                        board[i][j] = possibles.values().next().value;
                        return {
                            board: board,
                            s: i,
                            c: j
                        };
                    } else if (possibles.size != 0 && minPossibilities > possibles.size) {
                        mini = i;
                        minj = j;
                        minPossibilities = possibles.size;
                        bestGuess = possibles.values().next().value;
                    }
                }
            }
            board[mini][minj] = bestGuess;
            return {
                board: board,
                s: mini,
                c: minj
            };
        }

        function solve(board) {
            board = quickElimination(board);
            if (board === false) { return false; }
            if (board === true) { return true; }
            var possibilityGroups = allPossibilities(board);
            var guessedBoard = makeGuess(board, possibilityGroups);
            var guessedSolve = solve(guessedBoard.board);
            while (!guessedSolve.board) {
                possibilityGroups[guessedSolve.s][guessedSolve.c].values().next();
                guessedBoard = makeGuess(board, possibilityGroups);
                guessedSolve = solve(guessedBoard.board)
            }
            return true;
        }

        

        function allPossibilities(board) {
            var boardPossibilities = [];
            var s = 0;
            var c = 0;
            for (var group of board) {
                var groupPossibilities = [];
                for (var cell of group) {
                    if (cell == '') {
                        var possibleMoves = cellPossibilities(board, s, c);
                        if (possibleMoves.size == 0) {
                            return false;
                        } else {
                            groupPossibilities.push(cellPossibilities(board, s, c));
                        }
                    } else {
                        groupPossibilities.push(new Set());
                    }
                    c += 1;
                }
                c = 0;
                s += 1;
                boardPossibilities.push(groupPossibilities)
            }
            return boardPossibilities;
        }


        function cellPossibilities(board, s, c) {
            var setGroup = inverseGroup(new Set(board[s]));
            var horizontalGroup = inverseGroup(getLine(s, c, getHorizontal));
            var verticalGroup = inverseGroup(getLine(s, c, getVertical));
            firstIntersection = setGroup.intersection(horizontalGroup);
            finalIntersection = firstIntersection.intersection(verticalGroup);
            return finalIntersection;
        }


        function makeRange(start, end, inc) {
            if (end == undefined) {
                var arr = new Array(start);
                end = start;
                start = 0;
            } else {
                var arr = new Array(end - start);
            }
            if (inc == undefined) {
                inc = 1;
            }
            for (var i = 0; i < end - start; i++) {
                arr[i] = start + i * inc;
            }
            return arr;
        }

        function clearBoard() {
            vm.board = new Array(vm.size * vm.size);
            for (var i = 0; i < vm.size * vm.size; i++) {
                vm.board[i] = [];
                for (var j = 0; j < vm.size * vm.size; j++) {
                    vm.board[i].push("");
                }
            }
        }

        function initBoardString(str) {
            var board = []
            var group = []
            for (var i = 0; i < str.length; i++) {
                var row = Math.floor(i / (vm.size * vm.size));
                var col = i % (vm.size * vm.size);
                if (col == 0 && i != 0) {
                    board.push(group);
                    group = []
                }
                var elem = str[i];
                if (elem == '.') {
                    elem = '';
                }
                group.push(elem);
            }
            board.push(group);
            return board;
        }



        /* Inverses the group.  For example, a 2x2 sized board
        with a [0, 2] group comes out to [1, 3] */
        function inverseGroup(group) {
            var newGroup = new Set();
            var numbers = makeRange(1, vm.size * vm.size + 1);
            for (var i in numbers) {
                if (!group.has(String(numbers[i]))) {
                    newGroup.add(String(numbers[i]));
                }
            }
            return newGroup;
        }

        /* Returns the set indexes that
           are grouped horizontally with the parameter.
           E.G.  If the board is 3x3 and the param
           is 4 it will return 3,4,5 */
        function getHorizontal(set) {
            var start = Math.floor(set / vm.size) * vm.size;
            return makeRange(start, start + vm.size);
        }
        // console.log(getHorizontalIndexes(3)) // [3, 4, 5]

        /* Like getHorizontalIndexes but for vertical sets */
        function getVertical(set) {
            var start = set % vm.size;
            return makeRange(start, vm.size + start, vm.size);
        }
        // console.log(getVerticalIndexes(5)) // [2, 5, 8]

        /* Grabs the whole row or column, based on the index function
        (getHorizontal grabs the row, getVertical grabs the column) */
        function getLine(s, c, indexFunction) {
            var line = new Set();
            var sets = indexFunction(s);
            var cells = indexFunction(c);
            for (var i = 0; i < sets.length; i++) {
                set = vm.board[sets[i]];
                for (var j = 0; j < cells.length; j++) {
                    var cell = set[cells[j]];
                    if (cell != '') {
                        line.add(cell);
                    }
                }
            }
            return line;
        }
    }

    Set.prototype.intersection = function(setB) {
        var intersection = new Set();
        for (var elem of setB) {
            if (this.has(elem)) {
                intersection.add(elem);
            }
        }
        return intersection;
    }
    Set.prototype.union = function(setB) {
        var union = new Set(this);
        for (var elem of setB) {
            union.add(elem);
        }
        return union;
    }

})();