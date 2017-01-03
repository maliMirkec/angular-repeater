var gulp = require('gulp');
var include = require('gulp-include');

gulp.task('js-include', function () {
	return gulp.src('./demo/inc/demo.js')
		.pipe(include())
		.pipe(gulp.dest('./demo/dist/'));
});

gulp.task('js-include-live', function () {
	gulp.watch('./**/*.js', ['js-include']);
});
