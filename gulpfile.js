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

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass', 'cpy-to-prod','js-min', 'css-min', 'html-min', 'image-min']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./prod/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
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
    ' ./www/**/*.js'
  ], {base: './www/'})
  .pipe(uglify())
  .pipe(gulp.dest('./prod/'));
});

gulp.task('css-min', function() {
  gulp.src('./www/css/*.css')
  .pipe(minifyCss({
    keepSpecialComments: 0
  }))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('./prod/css'));
});

gulp.task('html-min', function() {
  gulp.src([
    './www/templates/*.html',
    './www/index.html'
  ], {base: './www/'})
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./prod/'));
});

gulp.task('image-min', function(){
  gulp.src('www/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./prod/img/'));
});

gulp.task('cpy-to-prod', function(){
  gulp.src([
    './www/lib/*',
    './www/*.json'
  ], {base: './www/'})
  .pipe(gulp.dest('./prod/'));
});
