import angular from 'angular';

import ScrollFactory from 'es6!./ScrollFactory';

export default angular.module('directives', [])
	.directive('scroll', ScrollFactory);
