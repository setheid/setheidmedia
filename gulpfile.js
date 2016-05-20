const gulp = require('gulp');
const webpack = require('webpack-stream');
const concatCss = require('gulp-concat-css');
const minifyCss = require('gulp-clean-css');

const sources = {
  css: __dirname + '/app/css/*.css',
  copy: __dirname + '/app/index.html',
  js: __dirname + '/app/app.js',
  test: __dirname + '/test/*_spec.js'
};

gulp.task('bundle:angular', () => {
  return gulp.src(__dirname + '/app/app.js')
    .pipe(webpack({output: {filename: 'angular.bundle.js'}}))
    .pipe(gulp.dest(__dirname))
});

gulp.task('bundle:scripts', () => {
  return gulp.src(__dirname + '/app/js/*.js')
    .pipe(webpack({output: {filename: 'scripts.bundle.js'}}))
    .pipe(gulp.dest(__dirname))
});

gulp.task('minify:css', () => {
  return gulp.src(sources.css)
  .pipe(concatCss('styles.min.css'))
  .pipe(minifyCss({compatibility: 'ie8'}))
  .pipe(gulp.dest(__dirname));
});

gulp.task('copy', () => {
  return gulp.src(sources.copy)
    .pipe(gulp.dest(__dirname))
});

gulp.task('bundle:test', () => {
  return gulp.src(sources.test)
    .pipe(webpack({output: {filename: 'test_bundle.js'}}))
    .pipe(gulp.dest('./test'));
});

gulp.task('default', ['bundle:angular', 'bundle:scripts', 'minify:css', 'copy']);
