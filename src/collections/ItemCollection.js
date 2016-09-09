import AsyncCollection from 'es6!./AsyncCollection';
import SimpleHTTPClient from 'es6!../net/SimpleHTTPClient';

const client = new SimpleHTTPClient();
client.middleware(JSON.parse);

export default class ItemCollection extends AsyncCollection {
	constructor() {
		super();
	}

	fetch(id) {
		return client.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
	}
}
