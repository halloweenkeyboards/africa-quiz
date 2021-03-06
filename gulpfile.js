var gulp = require('gulp');
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({lazy:true});
var browserSync = require('browser-sync');
var del = require('del');

var config = require('./gulp.config')();

var port = process.env.PORT || config.defaultPort;

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('clean-images', function(done) {
    clean(config.build + 'images/**/*.*', done);
});

gulp.task('clean-styles', function(done) {
    clean(config.temp + '**/*.css', done);
});

gulp.task('clean-code', function(done) {
    var files = [].concat(
        config.temp + '**/*.js',
        config.build + '**/*.html',
        config.build + 'js/**/*.js'
    );
    clean(files, done);
});

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

gulp.task('vet', function() {
    log('vetting js now');
    return gulp
        .src(config.alljs)
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose:true}))
        .pipe($.jshint.reporter('fail'));
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

gulp.task('serve-dev', ['inject'], function() {
    serve(true /* isDev */);
});

//////

function serve(isDev) {
    var nodeOptions = {
        script: config.nodeServer,
        delayTime: 1,
        env: {
            'PORT': port,
            'NODE_ENV': isDev ? 'dev' : 'build'
        },
        watch: [config.server]
    };
    return $.nodemon(nodeOptions)
        .on('restart', ['vet'], function(ev) {
            log('*** nodemon restarted');
            log('files changed on restart:\n' + ev);
            setTimeout(function() {
                browserSync.notify('reloading now...');
                browserSync.reload({stream:false});
            }, config.browserReloadDelay);
        })
        .on('start', function() {
            log('*** nodemon started');
            startBrowserSync(isDev);
        })
        .on('crash', function() {
            log('*** nodemon crashed: script crashed for some reason');
        })
        .on('exit', function() {
            log('*** nodemon exited cleanly');
        });
}

function changeEvent(event) {
    var srcPattern = new RegExp('/.*(?=/' + config.source + ')/');
    log('File ' + event.path.replace(srcPattern, '') + '' + event.type);
}

function startBrowserSync(isDev) {
    if (args.nosync || browserSync.active) {
        return;
    }
    log('starting browser-sync on port ' + port);

    if (isDev) {
        gulp.watch([config.less], ['styles'])
        .on('change', function(event) { changeEvent(event); });
    } else {
        gulp.watch([config.less, config.js, config.html], ['optimize', browserSync.reload])
        .on('change', function(event) { changeEvent(event); });
    }
    var options = {
        proxy: 'localhost:' + port,
        port: 8681,
        files: isDev ? [
          config.client + '**/*.*',
          '!' + config.less,
          config.temp + '**/*.css'
        ] : [],
        ghostMode: {
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: 1000
    };
    browserSync(options);
}

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
