import angular from 'angular';

import defaults from 'es6!./defaults';
import ago from 'es6!./ago';
import typeOf from 'es6!./typeof';
import assert from 'es6!./assert';

export default angular.module('filters', [])
	.filter('defaults', () => defaults)
	.filter('ago', () => ago)
	.filter('typeof', () => typeOf)
	.filter('assert', () => assert);
