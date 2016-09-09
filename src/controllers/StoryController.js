import angular from 'angular';

import Controller from 'es6!./Controller';

export default class StoryController extends Controller {
	static get $inject() {
		return ['$scope', '$window', '$stories'];
	}

	constructor(...deps) {
		super(...deps);

		this.$scope.noMoreData = this.$stories.noMoreData();
		this.$scope.stories = this.$stories.items();
		this.$scope.event = 'loading';
		this.$scope.select = this.select.bind(this);
		this.$scope.handleScroll = this.handleScroll.bind(this);

		this.$scope.obj = [{id: 123456}];
	}

	$onInit() {
		this.loadingMore = false;
		this.loadMoreStories();
	}

	select(id) {
		if (id === '*') return this.stories;
		return this.story(id);
	}

	get stories() {
		return this.$stories.items();
	}

	story(id) {
		return this.$stories.get(id);
	}

	handleScroll(event) {
		console.debug('scroll: ', event);
		if (this.loadingMore) return;
		if (!checkScrollToBottom(event.target, 20)) return;

		this.loadingMore = true;
		this.loadMoreStories();

		function checkScrollToBottom(scrollable, tolerance) {
			return scrollable.scrollHeight <= scrollable.scrollTop + scrollable.clientHeight + tolerance;
		}
	}

	loadMoreStories() {
		if (this.$stories.noMoreData()) return;

		const requestIds = this.$stories.nextBatch();
		console.debug('requestIds: ', requestIds);
		const promises = requestIds.map((id) => this.$stories.get(id));

		Promise.all(promises).then(
			() => {
				this.loadingMore = false;
				this.updateView({
					stories: this.$stories.items(),
					event: 'loaded'
				})
			},
			() => {
				this.updateView({
					stories: null,
					event: 'error'
				})
			}
		);
	}
}
