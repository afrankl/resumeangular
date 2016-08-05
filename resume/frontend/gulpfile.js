// Grab dependencies
var gulp = require('gulp');

var mainBowerFiles = require('main-bower-files');
var filter = require('gulp-filter');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var merge = require('merge-stream');
// var watch = require('gulp-watch');

// Destinations
// Where all the bower-related JS files be dumped
var bowerJS = {
    file: 'bower.js',
    directory: 'static/bower'
}
// Where all the bower-related CSS/SASS/SCSS files will be dumped
var bowerCSS = {
    file: 'bower.css',
    directory: 'static/bower'
}
// Where all the app-related AngularJS files will be dumped
var appAngularJS = {
    file: 'angular.js',
    directory: 'static/app'
}
// Where all the app-related CSS/SASS/SCSS files will be dumped
var appCSS = {
    file: 'app.css',
    directory: 'static/app'
}

// Task for Javascript files from bower packages 
gulp.task('bower-js', function() {
    return gulp.src(mainBowerFiles())
        .pipe(filter('**/*.js'))
        .pipe(concat(bowerJS.file))
        .pipe(uglify())
        .pipe(gulp.dest(bowerJS.directory));
})

// Task for CSS, SCSS and SASS files from bower packages
gulp.task('bower-css', function() {
    return gulp.src(mainBowerFiles())
        .pipe(filter('**/*.{css, scss, sass}'))
        .pipe(sass()) // Compile SASS components
        .pipe(concat(bowerCSS.file))
        .pipe(minify())
        .pipe(gulp.dest(bowerCSS.directory));
})

// Task to organize and concatenate AngularJS files for the application 
gulp.task('app-angular', function() {
    var angularSrc = 'angular/**'; // Directories containing AngularJS files
    // Pipelines
    var configPipeline = gulp.src(angularSrc)
        .pipe(filter('**/config.js'));
    var modulePipeline = gulp.src(angularSrc)
        .pipe(filter('**/module.js'));
    var factoryPipeline = gulp.src(angularSrc)
        .pipe(filter('**/*.factory.js'));
    var directivePipeline = gulp.src(angularSrc)
        .pipe(filter('**/*.directive.js'));
    // Final merge
    return merge(configPipeline, modulePipeline, factoryPipeline, directivePipeline)
        .pipe(concat(appAngularJS.file))
        .pipe(gulp.dest(appAngularJS.directory));
});

// Task to compile all application js
gulp.task('app-js', ['app-angular']);

// Task to compile all application components
gulp.task('app', ['app-js']);

// Task to compile all application components on change
gulp.task('watch', function() {
    return gulp.watch(['angular/**/*.js'], ['app']);
})

// Task to compile all bower components
gulp.task('bower', ['bower-js', 'bower-css']);

// Task that runs all the tasks at once
gulp.task('all', ['bower', 'app', 'watch']);

// Default task
gulp.task('default', ['bower']);