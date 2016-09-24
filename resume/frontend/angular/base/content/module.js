(function () {

    "use-strict";

    angular.module('app.content', [
            'app.content.bio',
            'app.content.education',
            'app.content.skills',
            'app.content.home',
            'app.content.languages',
            'app.content.projects',
            'app.content.work'
        ])
        .config(contentConfig);

    contentConfig.$inject = ['$stateProvider'];

    function contentConfig($stateProvider) {
        $stateProvider
            .state('home', {
                'url': '/home',
                'template': '<resume-home></resume-home>'
            })
            .state('bio', {
                'url': '/bio',
                'templateUrl': '/static/app/templates/base/content/bio/bio.html'
            })
            .state('education', {
                'url': '/education',
                'template': '<resume-education></resume-education>'
            })
            .state('work', {
                'url': '/work-experience',
                'templateUrl': '/static/app/templates/base/content/work/work.html'
            })
            .state('languages', {
                'url': '/programming-languages',
                'templateUrl': '/static/app/templates/base/content/languages/languages.html'
            })
            .state('skills', {
                'url': '/other-skills',
                'templateUrl': '/static/app/templates/base/content/skills/skills.html'
            })
            .state('projects', {
                'url': '/side-projects',
                'templateUrl': '/static/app/templates/base/content/projects/projects.html'
            })
            .state('resume', {
                'url': '/resume',
                'template': '<resume></resume>'
            })
    }
})();