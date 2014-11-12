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

    grunt.loadNpmTasks('grunt-contrib-sass'); // load sass
    grunt.loadNpmTasks('grunt-contrib-watch'); // load watch

    grunt.registerTask('default', ['sass']); // tell grunt what to do
    grunt.registerTask('dev', ['watch']); // let grunt watch files

};