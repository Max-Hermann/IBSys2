/**
 * Created by Max on 04.10.2015.
 */
var gulp = require('gulp'),
    typescript = require('gulp-tsc');

gulp.task('compile', function(){
    gulp.src(['src/**/*.ts'])
        .pipe(typescript())
        .pipe(gulp.dest('build/'))
});