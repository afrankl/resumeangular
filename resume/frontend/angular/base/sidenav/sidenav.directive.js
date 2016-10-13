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

    resumeSideNavController.$inject = ['$state', '$scope', '$rootScope', '$location', 'navigation'];

    function resumeSideNavController($state, $scope, $rootScope, $location, navigation) {
        //vars
        var vm = this;
        vm.navigation = navigation;
        vm.currentState = $state.current.name;
        vm.activeSection = 0;
        vm.activeItem = 0;
        vm.navItems = [
            [
                {
                    title: "Home",
                    sref: 'home',
                    icon: 'fa fa-home'
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
                // {
                //     title: "Projects and Challenges",
                //     sref: 'projects'
                // }
            ],
            // [
            //     {
            //         title: "Programming Languages",
            //         sref: 'languages'
            //     },
            //     {
            //         title: "Other Skills",
            //         sref: 'skills'
            //     },
                
            // ],
            [
                {
                    title: "Resume",
                    sref: 'resume'
                },
            ]
            // [
            //     {
            //         title: "Geographic Distance",
            //         sref: 'geodist'
            //     }
            // ]
        ]

        //functions
        vm.setActiveItem = setActiveItem;
        initActiveItem();


        function initActiveItem() {
            for (var i = 0; i < vm.navItems.length; i++) {
                var section = vm.navItems[i];
                for (var j = 0; j < section.length; j++) {
                    var navObj = section[j];
                    if (navObj.sref == vm.currentState) {
                        vm.activeSection = i;
                        vm.activeItem = j;
                        return;
                    }
                }
            }
        }

        function setActiveItem(sectionIndex, index, sref){
            vm.activeSection = sectionIndex;
            vm.activeItem = index;
            if (navigation.side.overlaps()) {
                navigation.side.collapse();
            }
        }

    }
})();