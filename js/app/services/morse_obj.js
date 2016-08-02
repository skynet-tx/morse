(function (ng) {
	"use strict";
	
	ng
		.module('morseApp')
		.factory('morseObj', morseObj);
	
	function morseObj() {
		
		var service = {
			getOutputString: getOutputString
		};
		
		return service;
		
		function getOutputString(string) {
			if (typeof string === "undefined" || string.length < 1) return;
			
			return _getWords(string);
		}
		
		/**
		 * Create an array of words from
		 * input string
		 * @param string
		 * @returns {*}
		 * @private
		 */
		function _getWords(string) {
			var wordsArr  = string.split(" "),
				newString = [];
			
			for (var i = 0; i < wordsArr.length; i++) {
				var word    = [],
					letters = wordsArr[i].split('');
				
				for (var k = 0; k < letters.length; k++) {
					var letter = dict[letters[k].toLocaleLowerCase()] || "?";
					word.push(letter);
				}
				
				newString.push(word);
			}
			
			return newString;
		}
	}
})(angular);