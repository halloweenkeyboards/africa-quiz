var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy:true});

var config = require('./gulp.config')();

gulp.task('wiredep', function() {
    var options = config.getWiredepOptions();
    var wiredep = require('wiredep').stream;

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});