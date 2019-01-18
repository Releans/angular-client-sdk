/**
 * Releans
 *
 * This file was automatically generated for Releans by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('Releans')
    .factory('BalanceController', ['$q',
        'Configuration',
        'HttpClient',
        'APIHelper',
        'BaseController',
        BalanceController
    ]);

    function BalanceController($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Get your available balance
             *
             *
             * @return {promise<String>}
             */
            getBalance: function () {

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/balance';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'Authorization': 'Bearer ' + Configuration.oAuthAccessToken
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    if (_result.code === 404) {
                        _deffered.resolve(null);
                    }_deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            }
        };
    }

}(angular));
