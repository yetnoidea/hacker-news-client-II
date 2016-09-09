export default {
	replace: true,
	template() {
		return (
			`<li class="story-brief" data-id={{story.id}} data-type={{story.type}}>
				<a href="#/{{story.id}}" class="hot-area">
					<div class="brief" data-hn={{story.type}}>
						<h3 title={{story.title}}>{{story.title}}</h3>
						<span class="author">{{story.by}}</span>
						<span class="time-ago">{{(story.time * 1000)}}</span>
						<span class="url" title={{story.url}}>{{story.url}}</span>
					</div>
					<div class="comments">
						<span class="icon descendants">{{story.descendants}}</span>
						<span class="icon score">{{story.score}}</span>
					</div>
				</a>
			</li>`
		);
	}
}
