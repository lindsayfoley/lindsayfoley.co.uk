let gulp = require('gulp');
let cssnano = require('gulp-cssnano');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;

gulp.task('sass', () => {
	return gulp.src('app/styles/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(gulp.dest('dist/styles'))
});

gulp.task('js', () => {
	return gulp.src('app/scripts/*.js')
	.pipe(concat('all.js'))
	.pipe(uglify({
		ecma: 6
	}))
	.pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch', () => {
	gulp.watch('app/styles/*.scss', gulp.series('sass'));
	gulp.watch('app/scripts/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series('sass', 'js', 'watch'));