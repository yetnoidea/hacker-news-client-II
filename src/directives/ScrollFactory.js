const factory = ($parse) => {
	return {
		restrict: 'A',
		link($scope, $element, $attr) {
			$element.on('scroll', (event) => {
				console.debug('event: ', event);
				$parse($attr.scroll)($scope, {event});
			})
		}
	}
};

factory.$inject = ['$parse'];

export default factory;


