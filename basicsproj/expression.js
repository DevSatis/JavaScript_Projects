module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dest/src/inputForm.html': 'src/inputForm.html',     // 'destination': 'source'
        'dest/src/manageFile.html': 'src/manageFile.html'
      }
    }
  },
    watch: {
      styles: {
        files: ['less/**/*.less'], // files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
connect: {
    server: {
      options: {
        port: 9000,
        base: 'app',
        keepalive: false
      }
    }
  }
  });

  grunt.registerTask('default', ['htmlmin','jshint','connect','watch']);
};