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
var print = require('gulp-print');
var pump = require('pump');

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

// Where all the app-related images (and other assets) will be dumped
var appAssets = {
    directory: '../static/app/assets'
}

// Where the main module will be dumped
var angularAppFile = {
    file: 'app.js',
    directory: '../static/app/js/angular'
}

// Where all the angular-related config files will be dumped
var angularConfig = {
    file: 'config.js',
    directory: '../static/app/js/angular'
}

// Where all the angular-related module files will be dumped
var angularModule = {
    file: 'module.js',
    directory: '../static/app/js/angular'
}
// Where all the angular-related factory files will be dumped
var angularFactory = {
    file: 'factory.js',
    directory: '../static/app/js/angular'
}
// Where all the angular-related config files will be dumped
var angularDirective = {
    file: 'directive.js',
    directory: '../static/app/js/angular'
}

// Task for Font files from bower packages 
gulp.task('bower-fonts', function() {
    return gulp.src('bower_components/**')
        .pipe(filter('**/*.{woff,eot,svg,ttf,woff2,otf}'))
        .pipe(flatten({includeParents: 0}))
        .pipe(gulp.dest(bowerFonts.directory));
})

// Task for Javascript files from bower packages 
gulp.task('bower-js', function() {
    return gulp.src(mainBowerFiles())
        // .pipe(print())
        .pipe(filter(['**/*.js',
                      '!**/ui-bootstrap/index.js']))
        .pipe(concat(bowerJS.file))
        .pipe(uglify())
        // .pipe(minify())
        .pipe(gulp.dest(bowerJS.directory));
})

// Task for CSS, SCSS and SASS files from bower packages
gulp.task('bower-css', function() {
    return gulp.src(mainBowerFiles())
        .pipe(filter('**/*.{css,scss,sass}'))
        .pipe(sass()) // Compile SASS components
        .pipe(concat(bowerCSS.file))
        .pipe(minify())
        .pipe(gulp.dest(bowerCSS.directory));
});

// Task for Html files from app packages 
gulp.task('app-html', function() {
    return gulp.src('angular/**/*.html')
        .pipe(gulp.dest(appHtml.directory));
})

// Task for asset files from app
gulp.task('app-assets', function() {
    return gulp.src('assets/**')
        .pipe(flatten({includeParents: 0}))
        .pipe(gulp.dest(appAssets.directory));
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

// Creates a task specifically for Angular files.
function createAngularTask(fileFilter, folderObj) {
    var angularSrc = 'angular/**';
    return function(cb) {
        pump([
                gulp.src(angularSrc),
                filter(fileFilter),
                // uglify(),
                // minify(),
                concat(folderObj.file),
                gulp.dest(folderObj.directory)
            ], cb);
    }
}

// Angular tasks (individual)
gulp.task('angular-app-file', createAngularTask('**/app.js', angularAppFile));
gulp.task('angular-config', createAngularTask('**/config.js', angularConfig));
gulp.task('angular-module', createAngularTask('**/module.js', angularModule));
gulp.task('angular-factory', createAngularTask('**/*.factory.js', angularFactory));
gulp.task('angular-directive', createAngularTask('**/*.directive.js', angularDirective));

// Angular tasks (combined)
gulp.task('app-angular', ['angular-app-file', 'angular-config', 'angular-module', 'angular-factory', 'angular-directive'])

// Task to compile all application js
gulp.task('app-js', ['app-angular']);

// Task to compile all application components
gulp.task('app', ['app-js', 'app-css', 'app-html', 'app-assets']);

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