var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy:true});
var del = require('del');

var config = require('./gulp.config')();

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('wiredep', function() {
    var options = config.getWiredepOptions();
    var wiredep = require('wiredep').stream;

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep', 'styles'], function() {
    return gulp
      .src(config.index)
      .pipe($.inject(gulp.src(config.css)))
      .pipe($.replace(/="..\/..\/bower_components\//g, '="/bower_components/'))
      .pipe(gulp.dest(config.client));
});

gulp.task('clean-styles', function(done) {
    var files = config.temp + '**/*.css';
    clean(files, done);
});

gulp.task('styles', ['clean-styles'], function() {
    log('compiling Less --> CSS');
    return gulp
        .src(config.less)
        .pipe($.plumber())
        .pipe($.less())
        .pipe($.autoprefixer({browsers:['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.temp));
});

//////

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
}
