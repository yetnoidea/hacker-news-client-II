export default {
	replace: true,
	template() {
		return (
			`<div class="side-list {{event}}" scroll="handleScroll(event)" ng-controller="StoryController">
				<ul class="stories-list" ng-if="event==='loaded'">
					<story-brief ng-repeat="story in select('*') track by story.id"></story-brief>
				</ul>
				<div class="loader-tips" ng-if="event==='loaded'">
					<loader event={{noMoreData?'loaded':'loading'}} text="no more data" data="obj" data3="obj[0]" data4="[654321]"></loader>
				</div>
				<loader ng-if="event==='loading'" event="{{event}}" text="loading" data="obj"></loader>
			</div>`
		)
	}
};
