import DependencyInjectable from 'es6!../base/DependencyInjectable';

export default class Controller extends DependencyInjectable {
	constructor(...deps) {
		super(...deps);
		this.checkInjected('$scope');
	}

	$onDestroy() {
		this.unbindDI();
	}

	updateView(props) {
		this.$scope.$apply(() => {
			if (typeof props === 'function') props = props();
			Object.assign(this.$scope, props);
		});
	}
}
