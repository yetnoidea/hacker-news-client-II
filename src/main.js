import polyfill from 'babel-polyfill';
import angular from 'angular';

import filters from 'es6!./filters/index';
import models from 'es6!./models/index';
import controllers from 'es6!./controllers/index';
import directives from 'es6!./directives/index';
import components from 'es6!./components/index';

angular.module('app', ['filters', 'models', 'controllers', 'directives', 'components']);

$(document).ready(() => {
	angular.bootstrap(getAppRoot(), ['app']);
});

function getAppRoot() {
	const container = getContainer();
	const root = document.createElement('app');
	container.appendChild(root);
	return root;
}

function getContainer() {
    const id = 'container';
    let container = document.getElementById(id);

    if (container) return container;

    container = document.createElement('div');
    container.id = id;
    document.body.appendChild(container);

    return container;
}
