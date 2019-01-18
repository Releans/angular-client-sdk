/**
 * Releans
 *
 * This file was automatically generated for Releans by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('Releans')
    .factory('Configuration', [Configuration]);

    function Configuration() {
        return {
            //The base Uri for API calls
            BASEURI : 'https://platform.releans.com/api',

            //OAuth 2.0 Access Token
            //TODO: Replace the oAuthAccessToken with an appropriate value
            oAuthAccessToken : 'TODO: Replace'

        };
    }

}(angular));
