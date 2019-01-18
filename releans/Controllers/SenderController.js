/**
 * Releans
 *
 * This file was automatically generated for Releans by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('Releans')
    .factory('SenderController', ['$q', 'Configuration', 'HttpClient', 'APIHelper', 'BaseController', SenderController
    ]);

    function SenderController($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Return the details of the sender name.
             *
             * @param {string} id The sender id you want its details
             *
             * @return {promise<Dynamic>}
             */
            getSenderNameDetails: function (id) {
                // Assign default values
                id = id || 'sender-id';

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/sender/view/';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'id': id
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json',
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
            },
            /**
             * Create a new sender id to send messages using it
             *
             * @param {string} senderName Name you want to register as Sender Name
             *
             * @return {promise<String>}
             */
            createSenderName: function (senderName) {
                // Assign default values
                senderName = senderName || 'Your sender name';

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/sender/create';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'content-type': 'text/plain; charset=utf-8',
                    'Authorization': 'Bearer ' + Configuration.oAuthAccessToken
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    headers: _headers,
                    body: senderName
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
            },
            /**
             * List all senders names associated with the account
             *
             *
             * @return {promise<Dynamic>}
             */
            getAllSenders: function () {

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/sender';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json',
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
