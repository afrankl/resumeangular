(function (){
    "use-strict";

    angular.module('app.content')
        .directive('resumeContent', resumeContentDirective);

    resumeContentDirective.$inject = ['$rootScope'];

    function resumeContentDirective($rootScope) {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/content/content.directive.html',
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
(function () {

    "use-strict";

    angular.module('app.topnav', [])
        .directive('resumeTopNav', resumeTopNavDirective);

    function resumeTopNavDirective(){
        return {
            restrict: 'EA',
            templateUrl: '/static/app/templates/topnav/topnav.directive.html',
            controllerAs: 'vm',
            controller: resumeTopNavController,
            scope: {},
            bind: {},
            transclude: true,
        }
    }

    resumeTopNavController.$inject = ['$state', '$rootScope']

    function resumeTopNavController($state, $rootScope) {
        //vars
        var vm = this;
        vm.navOpen = $rootScope.navOpen;

        //functions
        vm.onMenuClicked = onMenuClicked;

        function onMenuClicked() {
            vm.navOpen = !$rootScope.navOpen
            $rootScope.navOpen = vm.navOpen;
        }
    }
})();
(function () {

    "use-strict";

    angular.module('app.content.bio', [])
        .directive('resumeBio', resumeBioDirective);

    resumeBioDirective.$inject = [];

    function resumeBioDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/content/bio/bio.directive.html',
            controllerAs: 'vm',
            controller: resumeBioController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeBioController.$inject = [];
    
    function resumeBioController() {
        var vm = this;
    }
})();
(function () {

    "use-strict";

    angular.module('app.content.education', [])
        .directive('resumeEducation', resumeEducationDirective);

    resumeEducationDirective.$inject = [];

    function resumeEducationDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/content/education/education.directive.html',
            controllerAs: 'vm',
            controller: resumeEducationController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeEducationController.$inject = [];
    
    function resumeEducationController() {
        var vm = this;
    }
})();
(function () {

    "use-strict";

    angular.module('app.content.home', [])
        .directive('resumeHome', resumeHomeDirective);

    resumeHomeDirective.$inject = [];

    function resumeHomeDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/content/home/home.directive.html',
            controllerAs: 'vm',
            controller: resumeHomeController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeHomeController.$inject = [];
    
    function resumeHomeController() {
        var vm = this;
    }
})();
(function () {

    "use-strict";

    angular.module('app.content.languages', [])
        .directive('resumeLanguages', resumeLanguagesDirective);

    resumeLanguagesDirective.$inject = [];

    function resumeLanguagesDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/content/languages/languages.directive.html',
            controllerAs: 'vm',
            controller: resumeLanguagesController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeLanguagesController.$inject = [];
    
    function resumeLanguagesController() {
        var vm = this;
    }
})();
(function () {

    "use-strict";

    angular.module('app.content.projects', [])
        .directive('resumeProjects', resumeProjectsDirective);

    resumeProjectsDirective.$inject = [];

    function resumeProjectsDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/content/projects/projects.directive.html',
            controllerAs: 'vm',
            controller: resumeProjectsController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeProjectsController.$inject = [];
    
    function resumeProjectsController() {
        var vm = this;
    }
})();
(function () {

    "use-strict";

    angular.module('app.content.skills', [])
        .directive('resumeSkills', resumeSkillsDirective);

    resumeSkillsDirective.$inject = [];

    function resumeSkillsDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/content/skills/skills.directive.html',
            controllerAs: 'vm',
            controller: resumeSkillsController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeSkillsController.$inject = [];
    
    function resumeSkillsController() {
        var vm = this;
    }
})();
(function () {

    "use-strict";

    angular.module('app.content.work', [])
        .directive('resumeWork', resumeWorkDirective);

    resumeWorkDirective.$inject = [];

    function resumeWorkDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/content/work/work.directive.html',
            controllerAs: 'vm',
            controller: resumeWorkController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeWorkController.$inject = [];
    
    function resumeWorkController() {
        var vm = this;
    }
})();