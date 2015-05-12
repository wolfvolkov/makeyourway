module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-wiredep');
  // Project configuration.
  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      app: {
        // Point to the files that should be updated when
        // you run `grunt wiredep`       
        src: 'index.html'   // .html support...

      }
    }
  });




 grunt.registerTask('default', ['wiredep']);
 // grunt.registerTask('wiredep', ['wiredep']);

};


