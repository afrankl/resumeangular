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
            var header = $('#my-content h1#adjusted-header');
            header.css('margin-top', '-9px');
            domtoimage.toBlob(content).then(function(blob) {
                saveAs(blob, "Avi-Frankl-Resume.png");
                header.css('margin-top', '0px');
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