const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['*.js', './lib/**/*.js', './routes/**/*.js', './models/**/*.js'];
var testFiles = ['./test/**/*.js'];

gulp.task('lint', () => {
  gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test:mocha', () => {
  return gulp.src(testFiles)
    .pipe(mocha());
});

gulp.task('default', ['lint', 'test:mocha']);
