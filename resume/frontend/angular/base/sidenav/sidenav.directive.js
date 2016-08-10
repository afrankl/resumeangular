(function (){

    "use-strict";

    angular.module('app.sidenav', [])
        .directive('resumeSideNav', resumeSideNavDirective);

    resumeSideNavDirective.$inject = ['$rootScope'];

    function resumeSideNavDirective($rootScope) {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/base/sidenav/sidenav.directive.html',
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

    resumeSideNavController.$inject = ['$state', '$rootScope', '$location'];

    function resumeSideNavController($state, $rootScope, $location) {
        //vars
        var vm = this;
        vm.activeSection = 0;
        vm.activeItem = 0;
        vm.navOpen = $rootScope.navOpen;
        vm.navItems = [
            [
                {
                    title: "Home",
                    sref: 'home'
                }
            ],
            [
                {
                    title: "Bio",
                    sref: 'bio'
                },
                {
                    title: "Education",
                    sref: 'education'
                },
                {
                    title: "Work Experience",
                    sref: 'work'
                }
            ],
            [
                {
                    title: "Programming Languages",
                    sref: 'languages'
                },
                {
                    title: "Other Skills",
                    sref: 'skills'
                },
                {
                    title: "Side Projects",
                    sref: 'projects'
                }
            ]
        ]

        //functions
        vm.setActiveItem = setActiveItem;

        function setActiveItem(sectionIndex, index, sref){
            vm.activeSection = sectionIndex;
            vm.activeItem = index;
            $state.go(sref);
        }

    }
})();