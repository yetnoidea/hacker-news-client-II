import ItemCollection from 'es6!./ItemCollection';

import StoryIds from 'json!https://hacker-news.firebaseio.com/v0/topstories.json';

const IDS = Symbol('ids');
const READ_STEP = Symbol('read-step');

export default class StoryCollection extends ItemCollection {
	constructor() {
		super();
		this[IDS] = StoryIds;
		this[READ_STEP] = 20;
	}

	noMoreData() {
		//console.debug('ids: ', this[IDS]);
		console.debug('this.length: ', this.size);
		return this.size >= this[IDS].length;
	}

	nextBatch() {
		return this[IDS].slice(this.size, this.size + this[READ_STEP]);
	}
}
