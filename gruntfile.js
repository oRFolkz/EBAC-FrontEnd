    module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'DESTINO': 'ORIGEM'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'DESTINO': 'ORIGEM'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('build', ['less', 'uglify']);
}