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
        vm.activeSection = 0;
        vm.activeItem = 0;
        vm.navOpen = $rootScope.navOpen;
        vm.navItems = [
            [
                {
                    title: "Home"
                }
            ],
            [
                {
                    title: "Bio"
                },
                {
                    title: "Education"
                },
                {
                    title: "Work Experience"
                }
            ],
            [
                {
                    title: "Programming Languages"
                },
                {
                    title: "Other Skills"
                },
                {
                    title: "Side Projects"
                }
            ]
        ]

        //functions
        vm.setActiveItem = setActiveItem;

        function setActiveItem(sectionIndex, index){
            vm.activeSection = sectionIndex;
            vm.activeItem = index;
        }

    }
})();