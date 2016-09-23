(function () {

    "use-strict";

    angular.module('app.topnav', [])
        .directive('resumeTopNav', resumeTopNavDirective);

    resumeTopNavDirective.$inject = ['$rootScope', '$window'];

    function resumeTopNavDirective($rootScope, $window){
        return {
            restrict: 'EA',
            templateUrl: '/static/app/templates/base/topnav/topnav.directive.html',
            controllerAs: 'vm',
            controller: resumeTopNavController,
            scope: {},
            bind: {},
            transclude: true
        }
    }

    resumeTopNavController.$inject = ['$state', '$rootScope', '$compile', '$scope',
                                      'navigation']

    function resumeTopNavController($state, $rootScope, $compile, $scope,
                                    navigation) {
        //vars
        var vm = this;
        //functions
        vm.onMenuClicked = onMenuClicked;
        vm.onDownloadResumeClicked = onDownloadResumeClicked;
        vm.navigation = navigation;
        vm.resumeElement = $compile('<resume></resume>')($scope);

        function onMenuClicked() {
            navigation.side.toggle();
            console.log(navigation.side.hidden);
        }

        function onDownloadResumeClicked() {
            resumeToPng(vm.resumeElement);
        }

        function resumeToPng(resumeElement) {
            var resumeContent = resumeElement[0].childNodes[0];
            var content = document.getElementById('content');
            var exists = true;
            if ($('#my-content').length == 0) {
                content.appendChild(resumeContent);
                exists = false;
            } else {
                resumeContent = document.getElementById('my-content');
            }
            var header = $('#my-content h1#adjusted-header');
            header.css('margin-top', '-9px');
            domtoimage.toBlob(resumeContent).then(function(blob) {
                saveAs(blob, "Avi-Frankl-Resume.png");
                header.css('margin-top', '0px');
                if (!exists) {
                    content.removeChild(resumeContent); 
                }
                vm.resumeElement = $compile('<resume></resume>')($scope);
            }).catch(function (error) {
                console.log(error);
            })
        }
    }
})();