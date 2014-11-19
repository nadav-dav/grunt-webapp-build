module.exports ={
    zip: {
        cwd: '<%= folder.dist %>',
        src: ['<%= folder.dist %>/**/*'],
        dest: '<%= folder.dist %>/<%= pkg.name %>-<%= pkg.version %>.zip'
    }
};