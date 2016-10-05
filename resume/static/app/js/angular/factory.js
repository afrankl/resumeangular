(function() {
    'use-strict';

    angular.module('services')
        .factory('navigation', navigationFactory);

    function navigationFactory() {
        var isSideVisible = true;
        var windowSize;
        var service = {
            side: {
                expand: expandSideNav,
                collapse: collapseSideNav,
                toggle: toggleSideNav,
                isVisible: isSideNavVisible,
                setVisibility: setSideNavVisibility
            },
            window: {
                size: {
                    set: setWindowSize,
                    get: getWindowSize
                }
            }
        };

        return service;

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
