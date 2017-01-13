var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');
var jslint = require('gulp-jslint');
var templateCache = require('gulp-angular-templatecache');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass', 'cpy-to-prod','js-min', 'css-min', 'html-min', 'image-min']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./dev/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./dev/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch('./dev/js/*', ['jslint']);
  gulp.watch(['./dev/*.js', './dev/js/*.js'], ['js-min']);
  gulp.watch(['./dev/templates/*.html', './dev/index.html'], ['html-min']);
  gulp.watch('./dev/css/', ['css-min']);
  gulp.watch('./dev/img/', ['image-min']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('js-min', function() {
  gulp.src([
    ' ./dev/*.js',
    './dev/js/*.js'
  ], {base: './dev/'})
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('./www/'));
});

gulp.task('css-min', function() {
  gulp.src('./dev/css/*.css')
  .pipe(minifyCss({
    keepSpecialComments: 0
  }))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('./www/css'));
});

gulp.task('html-min', function() {
  gulp.src('./dev/templates/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(rename({ extname: '.min.html' }))
  .pipe(gulp.dest('./www/templates/'))
  .pipe(templateCache())
  .pipe(gulp.dest('./www/'));
});

gulp.task('image-min', function(){
  gulp.src('dev/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./www/img/'));
});

gulp.task('cpy-to-prod', function(){
  gulp.src([
    './dev/lib/**/*',
    './dev/*.json'
  ], {base: './dev/'})
  .pipe(gulp.dest('./www/'));
});

gulp.task('clean', function () {
  gulp.src([
    'ressources/',
    'platforms/android/build/*'
  ], {read: false})
  .pipe(clean());
});

gulp.task('jslint', function(){
  gulp.src('./dev/js/*')
  .pipe(jslint());
});

gulp.task('template-cache', function(){
  gulp.src('./www/templates/*.html')
  .pipe(templateCache())
  .pipe(gulp.dest('./www/js/'));
});
