export default {
	scope: {
		kids: '<',
		select: '<'
	},
	replace: true,
	template() {
		return (
			`<ul class="comment-list">
				<li class="comment" data-id="{{kid}}" ng-repeat="kid in kids">
					<comment comment="select(kid)"></comment>
					<comment-list select="select" kids="select(kid).kids"></comment-list>
				</li>
			</ul>`
		);
	}
}
