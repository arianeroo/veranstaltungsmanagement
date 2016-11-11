/**
 * Created by Ariane on 11.11.2016.
 */
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-pug'); //lade das paket, also das "pug" ersetzen mit dem was ich neu laden will
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        pug:{
            compile:{
                options:{
                    data:{
                        debug: false

                    }
                },
                files:{
                    'index.html':['src/pug/*.pug']
                }
            }
        },
        watch:{
            pug:{
                files: 'src/pug/**/*.pug',
                tasks: 'pug'
            }
        }
    });
};

