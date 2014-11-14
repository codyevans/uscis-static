module.exports = function(grunt) {

    // configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/app.css': 'scss/app.scss'
                }
            } 
        },

        concat: {
            dist: {
                src: [
                    'js/vendor/jquery.js',
                    'js/foundation.min.js',
                    'js/jquery.magnific-popup.min.js',
                    'js/app.js'
                ],
                dest: 'js/build/production.js',
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        // watch css files + livereload css
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            } 
        }

    });  // end config
    
    grunt.loadNpmTasks('grunt-contrib-concat'); // load concat
    grunt.loadNpmTasks('grunt-contrib-uglify'); // load uglify
    grunt.loadNpmTasks('grunt-contrib-sass'); // load sass
    grunt.loadNpmTasks('grunt-contrib-watch'); // load watch

    grunt.registerTask('default', ['sass', 'concat', 'uglify']); // tell grunt what to do
    grunt.registerTask('dev', ['watch']); // let grunt watch files

};