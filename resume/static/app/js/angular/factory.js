(function() {
    'use-strict';

    angular.module('services')
        .factory('navigation', navigationFactory);

    function navigationFactory() {
        var isSideVisible = true;
        var overlapSize = 768;
        var windowSize;
        var service = {
            side: {
                expand: expandSideNav,
                collapse: collapseSideNav,
                toggle: toggleSideNav,
                isVisible: isSideNavVisible,
                setVisibility: setSideNavVisibility,
                overlaps: shouldSideNavOverlap,
                overlapSize: getSideNavOverlapSize, 
            },
            window: {
                size: {
                    set: setWindowSize,
                    get: getWindowSize
                }
            }
        };

        return service;

        function getSideNavOverlapSize() {
            return overlapSize;
        }

        function shouldSideNavOverlap() {
            return windowSize < overlapSize;
        }

        function getWindowSize() {
            return windowSize;
        }

        function setWindowSize(size) {
            windowSize = size;
        }

        function expandSideNav() {
            isSideVisible = true;
        }

        function collapseSideNav() {
            isSideVisible = false;
        }

        function toggleSideNav() {
            isSideVisible = !isSideVisible;
        }

        function isSideNavVisible() {
            return isSideVisible;
        }

        function setSideNavVisibility(isVisible) {
            isSideVisible = isVisible;
        }
    }
})();
