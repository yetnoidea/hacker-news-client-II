import angular from 'angular';

import StoryController from 'es6!./StoryController';
import CommentController from 'es6!./CommentController';

export default angular.module('controllers', [])
	.controller('StoryController', StoryController)
	.controller('CommentController', CommentController);
