/*
 * Orange angular-swagger-ui - v0.3.0
 *
 * (C) 2015 Orange, all right reserved
 * MIT Licensed
 */
'use strict';

angular
    .module('swaggerUi', ['ng'])
    .directive('fileInput', function () {
        // helper to be able to retrieve HTML5 File in ngModel from input
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                element.bind('change', function () {
                    scope.$apply(function () {
                        // TODO manage multiple files ?
                        ngModel.$setViewValue(element[0].files[0]);
                    });
                });
            }
        };
    });
