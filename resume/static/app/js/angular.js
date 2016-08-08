(function() {
    angular.module('app', [
        'ui.router',
        'ngAnimate',

        'app.sidenav',
        'app.topnav',
        'app.content'
        ]);
})();
(function() {

    "use-strict";

    angular.module('app')
        .config(statesConfig)
        .run(navConfig);

    statesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function statesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }

    navConfig.$inject = ['$rootScope'];

    function navConfig($rootScope) {
        $rootScope.navOpen = true;
    }
})();

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
(function () {
    angular.module('app.content', [
        
        ])
        .config(contentConfig);

    contentConfig.$inject = ['$stateProvider'];

    function contentConfig($stateProvider) {
        $stateProvider
            .state('home', {
                'url': '/home',
                'templateUrl': '/static/app/templates/content/home/home.html'
            })
            .state('bio', {
                'url': '/bio',
                'templateUrl': '/static/app/templates/content/bio/bio.html'
            })
            .state('education', {
                'url': '/education',
                'templateUrl': '/static/app/templates/content/education/education.html'
            })
            .state('work', {
                'url': '/work-experience',
                'templateUrl': '/static/app/templates/content/work/work.html'
            })
            .state('languages', {
                'url': '/programming-languages',
                'templateUrl': '/static/app/templates/content/languages/languages.html'
            })
            .state('skills', {
                'url': '/other-skills',
                'templateUrl': '/static/app/templates/content/skills/skills.html'
            })
            .state('projects', {
                'url': '/side-projects',
                'templateUrl': '/static/app/templates/content/projects/projects.html'
            })
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