'use strict';

function task(taskName) {
    return require('./tasks/' + taskName);
}

module.exports = function (grunt, folders) {

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        folder: folders,

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        clean: task('clean'),
        copy: task('copy'),
        uglify: task('uglify'),
        open: task('open'),
        zip: task('zip'),
        waitServer: task('waitServer')
    });

    grunt.registerTask('build', [
        'copy:package',
        'uglify:assets',
        'uglify:modules'
    ]);

    grunt.registerTask('webapp', function () {
        require('./server/app');
    });

    grunt.registerTask('run', [
        'webapp',
        'waitServer',
        'open:server',
        'wait-forever'
    ]);
    grunt.registerTask('just-package', [
        'zip'
    ]);

    grunt.registerTask('package', [
        'clean',
        'build',
        'just-package'
    ]);

    grunt.registerTask('just-release', [
        'copy:release'
    ]);

    grunt.registerTask('release', [
        'package',
        'copy:release'
    ]);

    grunt.registerTask('default', ['run']);

    grunt.registerTask('test', ['build','mochacli','watch:test']);

};

