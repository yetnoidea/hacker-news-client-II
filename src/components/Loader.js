export default {
	scope: {
		event: '@',
		text: '@'
	},
	template() {
		return (
			`<div class="loader {{event}}">{{text}}</div>`
		);
	}
}
