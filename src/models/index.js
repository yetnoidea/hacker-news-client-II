import angular from 'angular';

import StoryCollection from 'es6!../collections/StoryCollection';
import CommentCollection from 'es6!../collections/CommentConllection';

export default angular.module('models', [])
	.service('$stories', StoryCollection)
	.service('$comments', CommentCollection);
