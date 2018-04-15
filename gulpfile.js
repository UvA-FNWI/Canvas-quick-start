/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('default', function () {
    gulp.src(["canvas.less"])
        .pipe(less())
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
    gulp.watch('canvas.less', ['default']);
});