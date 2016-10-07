!function(){"use-strict";function e(){return{restrict:"EA",templateUrl:"static/app/templates/resume/resume.directive.html",controllerAs:"vm",controller:t,scope:{},transclude:!0,bind:{}}}function t(e){function t(t){e.go(t)}var r=this;r.redirectToSref=t,r.rating=5,r.max=5}angular.module("resume",[]).directive("resume",e),e.$inject=[],t.$inject=["$state"]}();
!function(){"use-strict";function t(t,e,o){return{restrict:"EA",templateUrl:"static/app/templates/base/content/content.directive.html",controllerAs:"vm",controller:n,scope:{},transclude:!0,bind:{}}}function n(t,n,e){var o=this;o.loading=!1,o.navigation=e}angular.module("app.content").directive("resumeContent",t),t.$inject=["$rootScope","$window","navigation"],n.$inject=["$state","$rootScope","navigation"]}();
!function(){"use-strict";function e(e,i){return{restrict:"EA",templateUrl:"static/app/templates/base/sidenav/sidenav.directive.html",controllerAs:"vm",controller:t,scope:{},transclude:!0,bind:{}}}function t(e,t,i,n){function r(){for(var e=0;e<o.navItems.length;e++)for(var t=o.navItems[e],i=0;i<t.length;i++){var n=t[i];if(n.sref==o.currentState)return o.activeSection=e,void(o.activeItem=i)}}function a(e,t,i){o.activeSection=e,o.activeItem=t}var o=this;o.navigation=n,o.currentState=e.current.name,o.activeSection=0,o.activeItem=0,o.navItems=[[{title:"Home",sref:"home"}],[{title:"Bio",sref:"bio"},{title:"Education",sref:"education"},{title:"Work Experience",sref:"work"}],[{title:"Resume",sref:"resume"}]],o.setActiveItem=a,r()}angular.module("app.sidenav",[]).directive("resumeSideNav",e),e.$inject=["$rootScope","$window"],t.$inject=["$state","$rootScope","$location","navigation"]}();
!function(){"use-strict";function e(e,n){return{restrict:"EA",templateUrl:"/static/app/templates/base/topnav/topnav.directive.html",controllerAs:"vm",controller:t,scope:{},bind:{},transclude:!0}}function t(e,t,n,o,c){function i(){c.side.toggle()}function r(){s(a.resumeElement)}function s(e){var t=e[0].childNodes[0],c=document.getElementById("content"),i=!0;0==$("#my-content").length?(c.appendChild(t),i=!1):t=document.getElementById("my-content");var r=$("#my-content h1#adjusted-header");r.css("margin-top","-9px"),domtoimage.toBlob(t).then(function(e){saveAs(e,"Avi-Frankl-Resume.png"),r.css("margin-top","0px"),i||c.removeChild(t),a.resumeElement=n("<resume></resume>")(o)}).catch(function(e){console.log(e)})}var a=this;a.onMenuClicked=i,a.onDownloadResumeClicked=r,a.navigation=c,a.resumeElement=n("<resume></resume>")(o)}angular.module("app.topnav",[]).directive("resumeTopNav",e),e.$inject=["$rootScope","$window"],t.$inject=["$state","$rootScope","$compile","$scope","navigation"]}();
!function(){"use-strict";function e(){return{restrict:"EA",templateUrl:"static/app/templates/layout/resumeBox/resumeBox.directive.html",controllerAs:"vm",controller:t,scope:{},transclude:!0,bind:{}}}function t(){}angular.module("layout").directive("resumeBox",e),e.$inject=[],t.$inject=[]}();
!function(){"use-strict";function t(){return{restrict:"EA",templateUrl:"static/app/templates/base/content/bio/bio.directive.html",controllerAs:"vm",controller:e,scope:{},transclude:!0,bind:{}}}function e(){}angular.module("app.content.bio",[]).directive("resumeBio",t),t.$inject=[],e.$inject=[]}();
!function(){"use-strict";function t(){return{restrict:"EA",templateUrl:"static/app/templates/base/content/education/education.directive.html",controllerAs:"vm",controller:e,scope:{},transclude:!0,bind:{}}}function e(t){function e(e){t.go(e)}var n=this;n.redirectToSref=e}angular.module("app.content.education",[]).directive("resumeEducation",t),t.$inject=[],e.$inject=["$state"]}();
!function(){"use-strict";function t(){return{restrict:"EA",templateUrl:"static/app/templates/base/content/geodist/geodist.directive.html",controllerAs:"vm",controller:e,scope:{},transclude:!0,bind:{}}}function e(t){function e(t){c.cityItems.remove(t)}function n(){c.current.name&&c.cityItems.push(c.current)}function o(t,e,n,o){return Math.sqrt(Math.pow(t-n,2)+Math.pow(e-o,2))}function i(){for(var t=999999999,e=0;e<c.cityItems.length-1;e++)for(var n=c.cityItems[e],i=n.name,r=n.latitude,a=n.longitude,s=e+1;s<c.cityItems.length;s++){var l=c.cityItems[s],u=l.name,g=l.latitude,m=l.longitude,p=o(r,a,g,m);if(p<t){t=p;var d=i,h=u}}c.minCityOne=d,c.minCityTwo=h}function r(e){var n=new google.maps.Geocoder;n.geocode({address:e},function(n,o){if(o==google.maps.GeocoderStatus.OK){var i=n[0].geometry.location.lat(),r=n[0].geometry.location.lng(),a={latitude:i,longitude:r,name:e};c.cityItems.push(a),t.$apply()}})}function a(){for(var t=["Los Angeles","San Francisco","Boston","New York","Washington","Seattle","Austin","Chicago","San Diego","Denver","London","Toronto","Sydney","Melbourne","Paris","Singapore"],e=0;e<t.length;e++)r(t[e])}var c=this;c.cityItems=[],c.current={},c.addCityByInput=n,c.removeCity=e,c.calculateClosest=i,Array.prototype.remove=function(t,e){var n=this.slice((e||t)+1||this.length);return this.length=t<0?this.length+t:t,this.push.apply(this,n)},a()}angular.module("app.content.geodist",[]).directive("geographicDistance",t),t.$inject=[],e.$inject=["$scope"]}();
!function(){"use-strict";function e(){return{restrict:"EA",templateUrl:"static/app/templates/base/content/home/home.directive.html",controllerAs:"vm",controller:t,scope:{},transclude:!0,bind:{}}}function t(){function e(e){$state.go(e)}var t=this;t.redirectToSref=e}angular.module("app.content.home",[]).directive("resumeHome",e),e.$inject=[],t.$inject=[]}();
!function(){"use-strict";function e(){return{restrict:"EA",templateUrl:"static/app/templates/base/content/languages/languages.directive.html",controllerAs:"vm",controller:t,scope:{},transclude:!0,bind:{}}}function t(){}angular.module("app.content.languages",[]).directive("resumeLanguages",e),e.$inject=[],t.$inject=[]}();
!function(){"use-strict";function t(){return{restrict:"EA",templateUrl:"static/app/templates/base/content/projects/projects.directive.html",controllerAs:"vm",controller:e,scope:{},transclude:!0,bind:{}}}function e(){}angular.module("app.content.projects",[]).directive("resumeProjects",t),t.$inject=[],e.$inject=[]}();
!function(){"use-strict";function t(){return{restrict:"EA",templateUrl:"static/app/templates/base/content/skills/skills.directive.html",controllerAs:"vm",controller:e,scope:{},transclude:!0,bind:{}}}function e(){}angular.module("app.content.skills",[]).directive("resumeSkills",t),t.$inject=[],e.$inject=[]}();
!function(){"use-strict";function t(){return{restrict:"EA",templateUrl:"static/app/templates/base/content/work/work.directive.html",controllerAs:"vm",controller:e,scope:{},transclude:!0,bind:{}}}function e(){}angular.module("app.content.work",[]).directive("resumeWork",t),t.$inject=[],e.$inject=[]}();