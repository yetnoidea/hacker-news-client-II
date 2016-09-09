export default {
	replace: true,
	template() {
		return (
			`<div class="story-box" ng-controller="CommentController">
                <header ng-if="story">
                    <h3 class="title">{{story.title}}</h3>
                    <h6 class="url"><a href="{{story.url}}">{{story.url}}</a></h6>
                </header>
                <article ng-if="story">
                    <!--<iframe src="{{story.url}}" />-->
                </article>
                <footer class="{{event_}}" ng-if="story">
                    <comment-list select="select" kids="story.kids" ng-if="event_==='loaded'"></comment-list>
                    <loader event={{event_}} ng-if="event_==='loading'"></loader>
                </footer>
            </div>`
		);
	}
}
