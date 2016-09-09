configModules();
startWithEntryModule();

function configModules() {
	var configs = {
		paths: {
			// runtime compilers
			text: 'lib/requirejs-text/text',
			es6: 'lib/requirejs-babel/es6',
			babel: 'lib/babel/browser.min',
			autoprefixer: 'lib/autoprefixer/autoprefixer',
			// autoprefixer: 'https://rawgithub.com/ai/autoprefixer-rails/master/vendor/autoprefixer',

			// main libraries
			angular: 'lib/angular/angular.min',
			'angular-sanitize': 'lib/angular-sanitize/angular-sanitize.min',
			'babel-polyfill': 'lib/babel/browser-polyfill.min',
			classnames: 'lib/classnames/index',
			'normalize-less': 'lib/normalize-less/normalize'
		},
		shim: {
			angular: {
				exports: 'angular',
				init() {
					window.$ = window.angular.element;
				}
			},
			'angular-sanitize': {
				deps: ['angular']
			}
		},
		packages: [
			{
				name: 'less',
				location: 'lib/require-less',
				main: 'less'
			}
		],
		config: {
			less: {
				relativeUrls: true,
				plugins: [
					{
						name: 'autoprefixer',
						process: function (autoprefixer, source) {
							return autoprefixer.process(source).css;
						}
					}
				]
			}
		},
	    waitSeconds: 0
	};

	if (document.currentScript.dataset.env === 'development') {
		configs.paths.babel = 'lib/babel/browser';
		configs.paths['babel-polyfill'] = 'lib/babel/browser-polyfill';
		configs.paths.angular = 'lib/angular/angular';
		configs.paths['angular-sanitize'] = 'lib/angular-sanitize/angular-sanitize';
		configs.config.less.env = 'development';
	}

	requirejs.config(configs);
}

function startWithEntryModule() {
	var count = 0;
	var completed = false;
	var toast = createToast();

	toast.show('0 module loaded.');

	requirejs.onResourceLoad = function (context, map, deps) {
		if (!completed) toast.show(pluralify((++ count) + ' module loaded.'));
	};

	require(
	    [
	        'es6!src/main'
	    ],
	    function () {
	    	completed = true;
	    	toast.hide();
	    }
	);

	function pluralify(text) {
		return text.replace(/\b(\d+?)\s[a-zA-Z]+?\b/, function (match, p1) {
			if (Number(p1) <= 1) return match;
			return match + 's';
		});
	}

	function createToast() {
		var container = document.createElement('div');
		container.style = 'position:absolute; z-index:100; margin:auto; top:0; bottom:0; left:0; right:0; width:200px; height:20px; line-height:20px; text-align:center;';
		document.body.appendChild(container);

		return {
			show: function (text) {
				container.textContent = text;
				container.style.display = 'block';
			},
			hide: function () {
				container.style.display = 'none';
			}
		}
	}
}
