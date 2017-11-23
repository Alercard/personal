var gulp = require('gulp')
var browserSync = require('browser-sync').create()

// Servidor de desarrollo
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  })
})

// Tarea para vigilar los cambios
gulp.task('watch', function () {
  gulp.watch('./dist/css/*.css').on('change', browserSync.reload)
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['watch', 'serve'])
