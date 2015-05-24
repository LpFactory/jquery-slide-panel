module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.license %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			options: {
				banner: "<%= meta.banner %>"
			},
			dist: {
				src: ["src/jquery.lpfactory-slide-panel.js"],
				dest: "dist/jquery.lpfactory-slide-panel.js"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/jquery.lpfactory-slide-panel.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.lpfactory-slide-panel.js"],
				dest: "dist/jquery.lpfactory-slide-panel.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// watch for changes to source
		// Better than calling grunt a million times
		// (call 'grunt watch')
		watch: {
		    files: ['src/*'],
		    tasks: ['default']
		},

                jsbeautifier: {
			files: [ 'src/**/*.js' ],
			options: {
				config: '.jsbeautifier'
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
        grunt.loadNpmTasks("grunt-jsbeautifier");

	grunt.registerTask("build", ["concat", "uglify"]);
	grunt.registerTask("default", ["jsbeautifier", "jshint", "build"]);
	grunt.registerTask("travis", ["default"]);

};
