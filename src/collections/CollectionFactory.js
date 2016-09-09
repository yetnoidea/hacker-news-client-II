const ENTITIES = Symbol('entities');
const KEY = Symbol('key');

class SetAdapter {
	constructor() {
		this[ENTITIES] = new Set();
	}


}

export default class Collection {
	constructor(key) {
		if (typeof key !== 'undefined') {
			this[ENTITIES] = new Map();
			this[KEY] = key;
		} else {
			this[ENTITIES] = new Set();
		}
	}

	addItem(item) {

	}
}
