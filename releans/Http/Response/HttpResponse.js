/**
 * Releans
 *
 * This file was automatically generated for Releans by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of HttpResponse.
 *
 * @constructor
 */
angular.module('Releans')
    .factory('HttpResponse', [HttpResponseService]);

    function HttpResponseService() {
        return function HttpResponse() {
            this.statusCode = null;
            this.body = null;
            this.headers = null;
        };
    }

}(angular));
