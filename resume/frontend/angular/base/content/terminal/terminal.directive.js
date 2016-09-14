(function () {

    "use-strict";

    angular.module('app.content.terminal', ['app.content.terminal.question'])
        .directive('terminal', terminalDirective);

    terminalDirective.$inject = [];

    function terminalDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/base/content/terminal/terminal.directive.html',
            controllerAs: 'vm',
            controller: terminalController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    function Question(trueFalse, message, answer) {
        this.trueFalse = trueFalse;
        this.message = message;
        this.answer = answer;
    }

    terminalController.$inject = [];
    
    function terminalController() {
        var vm = this;
        vm.studentMode = false;
        vm.currentQuestion = 0;
        vm.toggleModes = toggleModes;
        vm.nextQuestion = nextQuestion;
        vm.previousQuestion = previousQuestion;
        vm.addQuestion = addQuestion;
        vm.booleanQuestionType = false;
        vm.toggleQuestionType = toggleQuestionType;

        vm.questions = []
        var testQuestion = new Question(false, "This is the first question", "And this is the first answer");
        vm.questions.push(testQuestion);

        function addQuestion() {
            vm.questions 
        }

        function toggleModes() {
            vm.studentMode = !vm.studentMode;
        }

        function nextQuestion() {
            vm.currentQuestion++;
            if (vm.currentQuestion > vm.questions.length) {
                vm.currentQuestion = 0;
            }
        }

        function previousQuestion() {
            vm.currentQuestion--;
            if (vm.currentQuestion < 0) {
                vm.currentQuestion = vm.questions.length - 1;
            }
        }

        function toggleQuestionType() {
            vm.booleanQuestionType = !vm.booleanQuestionType;
        }
    }
})();