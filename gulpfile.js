// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('clean', function() {
    gulp.src('./dist/*')
      .pipe(clean({force: true}));
});
gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
});
gulp.task('minify-js', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/'))
});
gulp.task('copy-bower-components', function () {
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});
gulp.task('copy-html-files', function () {
  gulp.src(['./app/*.html','./app/**/*.html'])
    .pipe(gulp.dest('dist/'));
});
gulp.task('connect', function () {
  browserSync.init({
      server: "./app"
  });

  gulp.watch("app/css/*.css");
  gulp.watch(["app/*.html","app/**/*.html"]).on('change', reload);
});
gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 3001
  });
});
// default task
gulp.task('default',
  ['connect']
);
gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connectDist']
  );
});