(function() {
    'use-strict';

    angular.module('services')
        .factory('navigation', navigationFactory);

    function navigationFactory() {
        var isSideVisible = true;
        var service = {
            side: {
                expand: expandSideNav,
                collapse: collapseSideNav,
                toggle: toggleSideNav,
                isVisible: isSideNavVisible,
                setVisibility: setSideNavVisibility
            }
        };

        return service;

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
