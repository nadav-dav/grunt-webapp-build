module.exports = {
    options: {
        banner: '<%= banner %>'
    },
    modules: {
        src: '<%= folder.client %>/modules/**/*.js',
        dest: '<%= folder.dist %>/<%= folder.client %>/modules/modules.min.js',
        sourceMap: true
    },
    assets: {
        src: '<%= folder.client %>/assets/js/**/*.js',
        dest: '<%= folder.dist %>/<%= folder.client %>/assets/js/assets.min.js',
        sourceMap: true
    }
};
