export default {
	restrict: 'E',
	scope: {
		comment: '<'
	},
	replace: true,
	template() {
		return (
			`<div class="comment" data-json="{{comment | json}}">
				<div class="comment-meta">
					<span class="author">{{comment.by | defaults: '[someone]'}}</span>
					<span class="time" data-time="{{comment.time * 1000}}">{{(comment.time * 1000) | ago}}</span>
				</div>
				<div class="comment-text" ng-bind-html="comment.deleted?'[deleted]':comment.text"></div>
			</div>`
		);
	}
};
