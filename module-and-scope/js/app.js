// Module & Scope
// Dependencies injection with module             
// Directives Invoking

var baseApp = angular.module("baseApp", []);

var demoApp = angular.module("demoApp", ['baseApp']);

