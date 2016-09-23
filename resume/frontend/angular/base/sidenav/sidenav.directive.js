(function (){

    "use-strict";

    angular.module('app.sidenav', [])
        .directive('resumeSideNav', resumeSideNavDirective);

    resumeSideNavDirective.$inject = ['$rootScope', '$window'];

    function resumeSideNavDirective($rootScope, $window) {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/base/sidenav/sidenav.directive.html',
            controllerAs: 'vm',
            controller: resumeSideNavController,
            scope: {},
            transclude: true,
            bind: {},
        }
    }

    resumeSideNavController.$inject = ['$state', '$rootScope', '$location', 'navigation'];

    function resumeSideNavController($state, $rootScope, $location, navigation) {
        //vars
        var vm = this;
        vm.navigation = navigation;
        vm.activeSection = 0;
        vm.activeItem = 0;
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
            ],
            [
                {
                    title: "Resume",
                    sref: 'resume'
                }
            ]
        ]

        //functions
        vm.setActiveItem = setActiveItem;

        function setActiveItem(sectionIndex, index, sref){
            vm.activeSection = sectionIndex;
            vm.activeItem = index;
            // $state.go(sref);
        }

    }
})();