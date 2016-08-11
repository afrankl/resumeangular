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

        function redirectToSref(stateName) {
            $state.go(stateName);
        }

        // function downloadPDF() {
        //     var form = $('#resume-content');
        //     var cache_width = form.width(),
        //         a4  =[ 595.28,  841.89];  // for a4 size paper width and height
        //     // create canvas object
        //     form.width(600);
        //     return html2canvas(form,{
        //         height: a4[1],
        //         width: a4[0],
        //         removeContainer:true,
        //         onrendered: function(canvas) {
        //             var img = canvas.toDataURL('img/png');
        //             window.open(img);  
        //          }
        //     }); 
        // }

        // downloadPDF();
        function downloadResume() {
            var form = document.getElementById('resume-content');
            console.log(form);
            var height = form.style.height;
            var width = form.style.width;

            html2canvas(document.getElementById('resume-content'), {
                height: 10000,
                width: 10000,
                onrendered: function(canvas) {
                    var img = canvas.toDataURL('img/png');
                    window.open(img);
                },
            }); 
        }
        // downloadResume();
        
    }
})();