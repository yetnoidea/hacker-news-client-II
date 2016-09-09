export default class DependencyInjectable {
	constructor(...deps) {
		this.bindDI(deps);
	}

	checkInjected(dep) {
		const inject = this.constructor.$inject;
		if (inject.indexOf(dep) === -1) throw new Error(`${dep} not injected yet.`);
	}

	bindDI(deps) {
		const inject = this.constructor.$inject;

		if (!isNonEmptyArray(inject)) return;

		inject.forEach((name, i) => {
			this[name] = deps[i];
		});
	}

	unbindDI() {
		const inject = this.constructor.$inject;

		if (!isNonEmptyArray(inject)) return;

		inject.forEach((name) => {
			this[name] = null;
			Reflect.deleteProperty(this, name);
		});
	}
}

function isNonEmptyArray(array) {
	return Array.isArray(array) && array.length > 0;
}
