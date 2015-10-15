module.exports = function(grunt) {

	// load all grunt tasks in package.json matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'expanded',
				lineNumbers: true
			},
			dist: {
				files: {
					'style.css': 'css/style.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions'],
				map: {
					inline: false,
					sourcesContent: false
				}
			},
			dist: {
				src: ['style.css']
			}
		},

		combine_mq: {
			default_options: {
				expand: true,
				cwd: '',
				src: ['style.css'],
				dest: ''
			}
		},

		csscomb: {
			dist: {
				files: [{
					expand: true,
					cwd: '',
					src: ['style.css'],
					dest: '',
				}]
			}
		},

		cssmin: {
			minify: {
				expand: true,
				cwd: '',
				src: ['style.css'],
				dest: '',
				ext: '.min.css'
			}
		},

		watch: {

			css: {
				files: ['css/*.scss'],
				tasks: ['styles'],
				options: {
					spawn: false,
					livereload: true,
				},
			},
		},
	});

	grunt.registerTask('styles', ['sass', 'autoprefixer', 'combine_mq', 'csscomb', 'cssmin']);
	grunt.registerTask('default', ['styles']);

};
