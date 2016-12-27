var gulp = require('gulp');
var bump = require('gulp-bump');

// Basic usage: 
// Will patch the version 
gulp.task('bump', function () {
	gulp.src('./component.json')
		.pipe(bump())
		.pipe(gulp.dest('./'));
});

// Defined method of updating: 
// Semantic 
gulp.task('bump', function () {
	gulp.src('./*.json')
		.pipe(bump({
			type: 'minor'
		}))
		.pipe(gulp.dest('./'));
});

// Defined method of updating: 
// Semantic major 
gulp.task('bump', function () {
	gulp.src('./package.yml')
		.pipe(bump({
			type: 'major'
		}))
		.pipe(gulp.dest('./'));
});

// Defined method of updating: 
// Set a specific version 
gulp.task('bump', function () {
	gulp.src('./*.json')
		.pipe(bump({
			version: '1.2.3'
		}))
		.pipe(gulp.dest('./'));
});

// Update bower, component, npm at once: 
gulp.task('bump', function () {
	gulp.src(['./bower.json', './component.json', './package.json'])
		.pipe(bump({
			type: 'major'
		}))
		.pipe(gulp.dest('./'));
});

// Define the key for versioning off 
gulp.task('bump', function () {
	gulp.src('./package.json')
		.pipe(bump({
			key: "appversion"
		}))
		.pipe(gulp.dest('./'));
});
