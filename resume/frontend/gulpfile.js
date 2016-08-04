var gulp = require('gulp');

var mainBowerFiles = require('main-bower-files');
var filter = require('gulp-filter');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minify = require('gulp-minify');

gulp.task('bower-js', function() {
    return gulp.src(mainBowerFiles())
        .pipe(filter('**/*.js'))
        .pipe(concat('bower.js'))
        .pipe(uglify())
        .pipe(gulp.dest('static/bower/js'));
})

gulp.task('bower-css', function() {
    return gulp.src(mainBowerFiles())
        .pipe(filter('**/*.{css, scss, sass}'))
        .pipe(sass())
        .pipe(concat('bower.css'))
        .pipe(minify())
        .pipe(gulp.dest('static/bower/css'))
})

gulp.task('bower', ['bower-js', 'bower-css'])

gulp.task('default', ['bower']);