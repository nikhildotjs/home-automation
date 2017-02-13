'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const scss = require('gulp-sass');
const _ = require('lodash');

function webpackTask(opts) {
  let config = _.extend(require('./webpack.config.js'), opts);

  return gulp.src('./src/app-client.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('./public/js/'));
}

gulp.task('webpack', function() {
  return webpackTask();
});

gulp.task('watch:webpack', function() {
  return webpackTask({watch: true});
});

gulp.task('styles', function() {
  gulp.src('./src/styles/main.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch:styles',function() {
  gulp.watch('./src/styles/**/*.scss', ['styles']);
});

gulp.task('build', ['webpack', 'styles']);

gulp.task('watch', ['watch:webpack', 'watch:styles']);
