(function (){
    "use-strict";

    angular.module('app.sidenav', [])
        .directive('resumeSideNav', resumeSideNavDirective);

    resumeSideNavDirective.$inject = ['$rootScope'];

    function resumeSideNavDirective($rootScope) {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/sidenav/sidenav.directive.html',
            controllerAs: 'vm',
            controller: resumeSideNavController,
            scope: {},
            transclude: true,
            bind: {},
            link: function(scope, element, attrs, ctrl) {
                $rootScope.$watch('navOpen', function(newVal, oldVal){
                    ctrl.navOpen = newVal;
                });
            }
        }
    }

    resumeSideNavController.$inject = ['$state', '$rootScope'];

    function resumeSideNavController($state, $rootScope) {
        //vars
        var vm = this;
        vm.navOpen = $rootScope.navOpen;
        vm.navItems = [
            {
                content: "Some content"
            },
            {
                content: "Some more content"
            }
        ]
        vm.activeItem = 0;

        //functions
        vm.setActiveItem = setActiveItem;

        function setActiveItem(index){
            console.log('clicked' + index);
            vm.activeItem = index;
        }

    }
})();