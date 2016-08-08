// Grab dependencies
var gulp = require('gulp');

var mainBowerFiles = require('main-bower-files');
var filter = require('gulp-filter');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var merge = require('merge-stream');
var flatten = require('gulp-flatten');

// Destinations
var bowerFonts = {
    directory: '../static/bower/fonts'
}
// Where all the bower-related JS files be dumped
var bowerJS = {
    file: 'bower.js',
    directory: '../static/bower/js'
}
// Where all the bower-related CSS/SASS/SCSS files will be dumped
var bowerCSS = {
    file: 'bower.css',
    directory: '../static/bower/css'
}
// Where all the app-related AngularJS files will be dumped
var appAngularJS = {
    file: 'angular.js',
    directory: '../static/app/js'
}
// Where all the app-related CSS/SASS/SCSS files will be dumped
var appCSS = {
    file: 'app.css',
    directory: '../static/app/css'
}
// Where all the app-related HTML files will be dumped
var appHtml = {
    directory: '../static/app/templates'
}

// Task for Font files from bower packages 
gulp.task('bower-fonts', function() {
    return gulp.src('bower_components/**')
        .pipe(filter('**/*.{woff,eot,svg,ttf,woff2}'))
        .pipe(flatten({includeParents: 0}))
        .pipe(gulp.dest(bowerFonts.directory));
})

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
});

// Task for Html files from app packages 
gulp.task('app-html', function() {
    return gulp.src('angular/base/**/*.html')
        .pipe(gulp.dest(appHtml.directory));
})

// Task for CSS, SCSS and SASS files for app
gulp.task('app-css', function() {
    return gulp.src('styles/**')
        .pipe(filter('**/*.scss'))
        .pipe(sass())
        .pipe(concat(appCSS.file))
        .pipe(minify())
        .pipe(gulp.dest(appCSS.directory));
});

// Task to organize and concatenate AngularJS files for the application 
gulp.task('app-angular', function() {
    var angularSrc = 'angular/**'; // Directories containing AngularJS files
    // Pipelines
    var configPipeline = gulp.src(angularSrc)
        .pipe(filter('**/app.js'));
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
gulp.task('app', ['app-js', 'app-css', 'app-html']);

// Task to compile all application components on change
gulp.task('watch', function() {
    return gulp.watch(['angular/**/*.js',
                       'angular/**/*.html',
                       'styles/**/*.scss'], ['app']);
})

// Task to compile all bower components
gulp.task('bower', ['bower-js', 'bower-css', 'bower-fonts']);

// Task that runs all the tasks at once
gulp.task('all', ['bower', 'app', 'watch']);

// Default task
gulp.task('default', ['app', 'watch']);