(function (){
    "use-strict";

    angular.module('app.content')
        .directive('resumeContent', resumeContentDirective);

    resumeContentDirective.$inject = ['$rootScope', '$window', 'navigation'];

    function resumeContentDirective($rootScope, $window, navigation) {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/base/content/content.directive.html',
            controllerAs: 'vm',
            controller: resumeContentController,
            scope: {},
            transclude: true,
            bind: {}
        };
    }

    resumeContentController.$inject = ['$state', '$rootScope', 'navigation'];
    
    function resumeContentController($state, $rootScope, navigation) {
        var vm = this;
        vm.loading = false;
        vm.navigation = navigation;
    }
})();