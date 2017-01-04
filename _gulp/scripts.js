var gulp = require('gulp');
var include = require('gulp-include');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('js-include', function () {
	return gulp.src('./demo/inc/demo.js')
		.pipe(include())
		.pipe(gulp.dest('./demo/dist/'));
});

gulp.task('js-include-live', function () {
	gulp.watch('./**/*.js', ['js-include']);
});

gulp.task('uglify', function () {
	gulp.src('./angular-repeater.js')
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./'));
});

