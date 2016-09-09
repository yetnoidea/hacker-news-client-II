import Controller from 'es6!./Controller';
import CommentCollection from 'es6!../collections/CommentConllection';

const COMMENTS_REQUESTED = Symbol('comments-requested');
const BIND_SHOW_STORY = Symbol('bind-show-story');

export default class CommentController extends Controller {
	static get $inject() {
		return ['$scope', '$window', '$stories', '$comments'];
	}

	constructor(...deps) {
		super(...deps);
		this.$scope.story = null;
		this.$scope.select = this.select.bind(this);
	}

	$onInit() {
		console.debug('$onInit');
		this[BIND_SHOW_STORY] = () => {
			console.debug('show story');
			const storyId = parseInt(location.hash.replace(/^\#\//, ''), 10);
			const story = this.$stories.get(storyId);
			this.loadCommentsForStory(story);
		};
		this.$window.addEventListener('hashchange', this[BIND_SHOW_STORY]);
	}

	$onDestroy() {
		super.$onDestroy();
		this.$window.removeEventListener('hashchange', this[BIND_SHOW_STORY]);
		this[BIND_SHOW_STORY] = null;
	}

	select(id) {
		if (id === '*') return this.comments;
		return this.comment(id);
	}

	get comments() {
		return this.$comments.items();
	}

	comment(id) {
		return this.$comments.get(id);
	}

	has(id) {
		return this.$comments.has(id);
	}

	loadCommentsForStory(story) {
		const requested = story[COMMENTS_REQUESTED];

		this.updateView({story, event_: requested ? 'loaded' : 'loading'});

		if (requested) return;

		this.loadCommentsByIds(story.kids)
			.then(
				(shouldNotify) => {
					story[COMMENTS_REQUESTED] = true;
					//if (!shouldNotify) return;
					console.debug('comments loaded');
					this.updateView({event_: 'loaded'});
				},
				(err) => {
					console.error(err);
					this.updateView({event_: 'error'});
				}
			);
	}

	loadCommentsByIds(ids) {
		let requested = false;

		if (!isNonEmptyArray(ids)) return Promise.resolve(requested);

		const promises = ids.map((id) => {
			return this.$comments.get(id)
				.then((comment) => {
					if (!comment) return null;
					requested = true;
					return this.loadCommentsByIds(comment.kids);
				});
		});

		return Promise.all(promises).then(() => requested);
	}
}

function isNonEmptyArray(array) {
	return Array.isArray(array) && array.length > 0;
}
