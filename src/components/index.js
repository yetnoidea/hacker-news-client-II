import angular from 'angular';
import ngSanitize from 'angular-sanitize';

import App from 'es6!./App';
import StoryBrief from 'es6!./StoryBrief';
import StoryList from 'es6!./StoryList';
import StoryBox from 'es6!./StoryBox';
import Comment from 'es6!./Comment';
import CommentList from 'es6!./CommentList';
import Loader from 'es6!./Loader';

import normalizeLess from 'less!normalize-less';
import style from 'less!../styles/main';

console.log('angular: ', angular);

export default angular.module('components', ['ngSanitize'])
	.directive('loader', () => Loader)
	.directive('storyBrief', () => StoryBrief)
	.directive('storyList', () => StoryList)
	.directive('storyBox', () => StoryBox)
	.directive('comment', () => Comment)
	.directive('commentList', () => CommentList)
	.directive('app', () => App);
