!function(){"use-strict";function n(){function n(){return l}function i(){return f<l}function t(){return f}function e(n){f=n}function o(){a=!0}function u(){a=!1}function r(){a=!a}function c(){return a}function s(n){a=n}var f,a=!0,l=768,g={side:{expand:o,collapse:u,toggle:r,isVisible:c,setVisibility:s,overlaps:i,overlapSize:n},window:{size:{set:e,get:t}}};return g}angular.module("services").factory("navigation",n)}();