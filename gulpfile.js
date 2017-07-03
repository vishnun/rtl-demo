'use strict';

var gulp = require('gulp'),
  	connect = require('gulp-connect'),
  	sass = require('gulp-sass');

gulp.task('watch', function() {
    gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: ['.', '.tmp']
  });
});

gulp.task('sass', function() {
  gulp.src('styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(connect.reload());
});

gulp.task('default', ['sass', 'webserver', 'watch']);