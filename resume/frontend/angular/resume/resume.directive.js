(function () {

    "use-strict";

    angular.module('resume', [])
        .directive('resume', resumeDirective);

    resumeDirective.$inject = [];

    function resumeDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/resume/resume.directive.html',
            controllerAs: 'vm',
            controller: resumeController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeController.$inject = ['$state'];
    
    function resumeController($state) {
        var vm = this;

        vm.redirectToSref = redirectToSref;

        function redirectToSref(stateName) {
            $state.go(stateName);
        }

        var form = document.getElementById('my-content');
        domtoimage.toPng(form).then(function(dataurl) {
            window.open(dataurl);
        })
    }
})();