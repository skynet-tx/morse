/**
 * Created by skynetsaa on 01.08.16.
 */
(function (ng) {
	"use strict";
	
	ng
		.module('morseApp')
		.controller("HomeCtrl", HomeCtrl);
	
	function HomeCtrl($scope, $document, morseObj) {
		$scope.load      = onLoad;
		$scope.outputMsg = ["empty message ...."];
		$scope.words     = 0;
		
		function onLoad() {
			angular.element(document.getElementById('encrypt-btn')).on('click', onEncryptBtn);
		}
		
		/**
		 * Event on button click
		 * @param eve
		 */
		function onEncryptBtn(eve) {
			eve.preventDefault();
			eve.stopPropagation();
			
			var outputArr = morseObj.getOutputString(angular.element($document).find('input').val());
			return setOuputString(outputArr);
		}
		
		/**
		 * Set string with morse code
		 * @param outputArr {string}
		 */
		function setOuputString(outputArr) {
			var words = outputArr.length;
			
			$scope.outputMsg = outputArr;
			$scope.words     = words;
			return $scope.$digest();
		}
	}
	
})(angular);