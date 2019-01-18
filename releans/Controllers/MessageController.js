/**
 * Releans
 *
 * This file was automatically generated for Releans by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('Releans')
    .factory('MessageController', ['$q',
        'Configuration',
        'HttpClient',
        'APIHelper',
        'BaseController',
        MessageController
    ]);

    function MessageController($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * List all messages sent by the account.
             *
             *
             * @return {promise<Dynamic>}
             */
            getAllMessages: function () {

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/message';
                
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
             * Return cost of sending a message to the number.
             *
             * @param {string} mobileNumber Mobile number you want to know the price of sending a message.
             *
             * @return {promise<String>}
             */
            getPriceOfMessage: function (mobileNumber) {

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (mobileNumber === null || mobileNumber === undefined) {
                    _deffered.reject({
                        errorMessage: 'The parameter `mobileNumber` is a required parameter and cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/message/price';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'mobileNumber': mobileNumber
                });

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
            },
            /**
             * Return the details of the message.
             *
             * @param {string} id Id of the message you need to return its details.
             *
             * @return {promise<Dynamic>}
             */
            getViewMessage: function (id) {
                // Assign default values
                id = id || 'id';

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/message/view';
                
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
             * Send a single message.
             *
             * @param {string} senderId Sender id to send the message from.
             * @param {string} mobileNumber The mobile number supposed to receive the message.
             * @param {string} message Message text.
             *
             * @return {promise<String>}
             */
            createSendSMSMessage: function (senderId, mobileNumber, message) {
                // Assign default values
                senderId = senderId || 'sender-id';
                mobileNumber = mobileNumber || 'mobile-number';
                message = message || 'message';

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/message/send';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'Authorization': 'Bearer ' + Configuration.oAuthAccessToken
                };

                // prepare form data
                var _form = {
                    'senderId': senderId,
                    'mobileNumber': mobileNumber,
                    'message': message
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    headers: _headers,
                    form: _form,
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
