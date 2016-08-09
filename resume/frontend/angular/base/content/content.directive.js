(function (){
    "use-strict";

    angular.module('app.content')
        .directive('resumeContent', resumeContentDirective);

    resumeContentDirective.$inject = ['$rootScope'];

    function resumeContentDirective($rootScope) {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/base/content/content.directive.html',
            controllerAs: 'vm',
            controller: resumeContentController,
            scope: {},
            transclude: true,
            bind: {},
            link: function(scope, element, attrs, ctrl) {
                    $rootScope.$watch('navOpen', function(newVal, oldVal){
                        ctrl.navOpen = newVal;
                    });
                }
        };
    }

    resumeContentController.$inject = ['$state', '$rootScope'];
    
    function resumeContentController($state, $rootScope) {
        var vm = this;
        vm.navOpen = !$rootScope.navOpen;
    }
})();