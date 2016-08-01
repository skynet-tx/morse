/**
 * Created by skynetsaa on 01.08.16.
 */
(function (ng) {
	"use strict";
	
	angular
		.module('morseApp')
		.controller("HomeCtrl", HomeCtrl);
	
	function HomeCtrl() {
		var vm = this;
		console.info("loaded...");
	}
	
})(angular);