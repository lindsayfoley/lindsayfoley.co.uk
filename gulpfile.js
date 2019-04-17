const { src, dest, watch, series, parallel } = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

function css() {
	return src('app/styles/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(dest('dist/styles'))	
}

function js() {
	return src('app/scripts/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
	.pipe(uglify())
	.pipe(concat('all.min.js'))
	.pipe(dest('dist/scripts'));
}

function compressImages() {
	return src('app/images/*')
    .pipe(imagemin([
        imageminMozjpeg({
            quality: 75
        })
    ]))
    .pipe(dest('dist/images'))
}

function watchForChanges() {
	watch('app/styles/*.scss', series(sass));
	watch('app/scripts/*.js', series(js));	
}

exports.css = css;
exports.js = js;
exports.compressImages = compressImages;
exports.watchForChanges = watchForChanges;
exports.default = parallel(css, js, compressImages, watchForChanges);
