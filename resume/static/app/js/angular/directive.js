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
        vm.rating = 5;
        vm.max = 5;

        function redirectToSref(stateName) {
            $state.go(stateName);
        }
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
            templateUrl: '/static/app/templates/base/topnav/topnav.directive.html',
            controllerAs: 'vm',
            controller: resumeTopNavController,
            scope: {},
            bind: {},
            transclude: true,
        }
    }

    resumeTopNavController.$inject = ['$state', '$rootScope', '$compile', '$scope', '$timeout']

    function resumeTopNavController($state, $rootScope, $compile, $scope, $timeout) {
        //vars
        var vm = this;
        vm.navOpen = $rootScope.navOpen;

        //functions
        vm.onMenuClicked = onMenuClicked;
        vm.onDownloadResumeClicked = onDownloadResumeClicked;
        vm.resumeElement = $compile('<resume></resume>')($scope);

        function onMenuClicked() {
            vm.navOpen = !$rootScope.navOpen
            $rootScope.navOpen = vm.navOpen;
        }

        function onDownloadResumeClicked() {
            resumeToPng(vm.resumeElement, downloadResume);
        }

        function resumeToPng(resumeElement, onDataUrlFunc) {
            // var content = resumeElement.childNodes[0];
            // console.log(content);
            $state.go('resume');
            var content = $('#my-content')[0];
            domtoimage.toBlob(content).then(function(blob) {
                saveAs(blob, "Avi-Frankl-Resume.png");
            }).catch(function (error) {
                console.log(error);
            })
        }

        function dataURItoBlob(dataURI) {
            var binary = atob(dataURI.split(',')[1]);
            var array = [];
            for(var i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
        }

        function downloadResume(dataurl) {
            console.log('tried to save');
            saveAs(dataURItoBlob(dataurl), "AviResume.png");
            
        }
    }
})();
(function () {

    "use-strict";

    angular.module('layout')
        .directive('resumeBox', resumeBoxDirective);

    resumeBoxDirective.$inject = [];

    function resumeBoxDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/layout/resumeBox/resumeBox.directive.html',
            controllerAs: 'vm',
            controller: resumeBoxController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeBoxController.$inject = [];
    
    function resumeBoxController() {
        var vm = this;
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
            templateUrl: 'static/app/templates/base/content/bio/bio.directive.html',
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
            templateUrl: 'static/app/templates/base/content/education/education.directive.html',
            controllerAs: 'vm',
            controller: resumeEducationController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    resumeEducationController.$inject = ['$state'];
    
    function resumeEducationController($state) {
        var vm = this;

        vm.redirectToSref = redirectToSref;

        function redirectToSref(stateName) {
            $state.go(stateName);
        }
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
            templateUrl: 'static/app/templates/base/content/home/home.directive.html',
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
            templateUrl: 'static/app/templates/base/content/languages/languages.directive.html',
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
            templateUrl: 'static/app/templates/base/content/projects/projects.directive.html',
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
            templateUrl: 'static/app/templates/base/content/skills/skills.directive.html',
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
            templateUrl: 'static/app/templates/base/content/work/work.directive.html',
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