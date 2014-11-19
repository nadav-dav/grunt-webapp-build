// HELPER FOR COPY
function components( src, dest, pattern ){
    pattern = pattern || ['*']
    return {
        expand : true,
        cwd : '<%= folder.components %>' + src,
        dest : '<%= folder.dist %>/assets' + dest,
        src : pattern
    }
}

module.exports = {
    package : {
        files : [
            {
                nonull : true,
                expand : true,
                cwd : '<%= folder.server %>/',
                dest : '<%= folder.dist %>/server',
                src : ['**/*']
            },
            {
                nonull : true,
                expand : true,
                cwd : '<%= folder.client %>',
                dest : '<%= folder.dist %>/client',
                src : ['**/*']
            },
            {
                nonull : true,
                expand : true,
                cwd : '<%= folder.src %>',
                dest : '<%= folder.dist %>',
                src : ['package.json', 'index.js']
            }
        ]
    },
    release : {
        files : [
            {
                nonull : true,
                dest : '<%= folder.release %>/<%= pkg.name %>/<%= pkg.name %>-<%= pkg.version %>.zip',
                src : ['<%= folder.dist %>/<%= pkg.name %>-<%= pkg.version %>.zip']
            }
        ]
    }
};
