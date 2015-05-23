module.exports = (grunt) ->
  
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    scssFiles:
      files: [
        expand: true # Enable dynamic expansion.
        cwd: "scss/" # Src matches are relative to this path.
        src: ["**/*.scss"] # Actual pattern(s) to match.
        dest: "public/css/" # Destination path prefix.
        ext: ".css" # Dest filepaths will have this extension.
        extDot: "first" # Extensions in filenames begin after the first dot
      ]

    concurrent:
      nodemonWatch:
        options:
          logConcurrentOutput: true
        tasks: ["nodemon", "watch"]

    watch:
      stylesheets:
        files: "scss/**/*"
        tasks: "sass:dev"

    nodemon:
      dev:
        script: 'app.js'
        options:
          ext: 'js'
          watch: ['components', 'app.js']

    sass:
      prod:
        options:
          sourceMap: false
          outputStyle: 'compressed'
        files: '<%= scssFiles.files %>'
      dev:
        options:
          sourceMap: true
        files: '<%= scssFiles.files %>'

  
  # Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks "grunt-sass"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-nodemon"
  grunt.loadNpmTasks "grunt-concurrent"
  
  # Default task(s).
  grunt.registerTask "default", ["sass:dev", "concurrent"]
