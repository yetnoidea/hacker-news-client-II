const ENTITIES = Symbol('entities');
const CACHE = Symbol('cache');

export default class AsyncCollection {
	constructor() {
		this[ENTITIES] = new Map();
		this[CACHE] = new Map();
	}

	get size() {
		return this[ENTITIES].size;
	}

	has(id) {
		return this[ENTITIES].has(id);
	}

	set(id, item) {
		this[ENTITIES].set(id, item)
	}

	add(id, item) {
		if (!this.has(id)) this.set(id, item);
	}

	get(id) {
		console.debug(`entity[${id}(${typeof id})]: `, this[ENTITIES].get(id));
		console.debug(`cache[${id}(${typeof id})]: `, this[CACHE].get(id));
		if (this[ENTITIES].has(id)) return this[ENTITIES].get(id);
		if (this[CACHE].has(id)) return this[CACHE].get(id);

		const item = this.fetch(id);
		this[CACHE].set(id, item);

		return item.then((item) => {
			console.debug(`story-${id} requested`);
			this[ENTITIES].set(id, item);
			this[CACHE].delete(id);
			console.debug(`entity[${id}(${typeof id})]: `, this[ENTITIES].get(id));
			console.debug(`cache[${id}(${typeof id})]: `, this[CACHE].get(id));
			return item;
		});
	}

	ids() {
		return Array.from(this[ENTITIES].keys());
	}

	items() {
		return Array.from(this[ENTITIES].values());
	}

	caches() {
		return Array.from(this[CACHE].values());
	}

	all() {
		return this.items().concat(this.caches());
	}

	forEach(callback, thisArg) {
		this.ids().forEach((id) => Reflect.apply(callback, thisArg, [this[ENTITIES].get(id), id, this]));
	}

	map(callback, thisArg) {
		return this.ids().map((id) => Reflect.apply(callback, thisArg, [this[ENTITIES].get(id), id, this]));
	}

	/**
	 * fetch resource from remote.
	 * @param id
	 * @return {Promise}
	 */
	fetch(id) {
		throw new Error('not implemented yet');
	}
}
