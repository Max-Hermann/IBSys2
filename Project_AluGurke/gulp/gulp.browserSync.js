var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	watch = require('gulp-watch'),
	path = require('./gulp.path').path,
	requireDir = require('require-dir');

requireDir('./');

gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: path.proxy
    });
	watch(path.indexSrc, browserSync.reload);
});