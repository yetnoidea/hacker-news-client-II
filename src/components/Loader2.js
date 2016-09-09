import style from 'less!../styles/fragments/loader';

export default {
	scope: {
		event: '@',
		text: '@',
		data: '@',
		data2: '<data',
		data3: '<',
		data4: '<'
	},
	template($element, $attr) {
		console.debug('loader.scope: ', $element.scope());
		console.debug('loader.attr: ', $attr);
		return (
			`<div class="loader {{event}}"
				data-story-id="{{data}}"
				data-story-id2={{data2[0].id}}
				data-story-id2-yes={{data2[0].id==123456?'yes':'no'}}
				data-story-id3={{data3.id}}
				data-story-id4={{data4[0]}}
				data-story-id4-quoted="data4[0]"
				data-expr1="1+2"
				data-expr2="{{1+2}}"
				data-expr3={{1+2}}>
				{{text}}
			</div>`
		);
	}
}
