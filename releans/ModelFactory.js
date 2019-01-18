/**
 * Releans
 *
 * This file was automatically generated for Releans by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';
angular.module('Releans')
    .factory('ModelFactory', [ModelFactory]);

	/**
	 * Factory service to create instances of models and exception classes
	 */
    function ModelFactory() {

		var classMap = {
		};

		return {
		    /**
		     * Creates instance of a model class
		     * @param  modelName  {string}  Name of class to instantiate
		     * @returns  {object} Instance of the model class
		     */
			getInstance: function(modelName) {
        		return new classMap[modelName]();
			}
		};
	}

}(angular));
