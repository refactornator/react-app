var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var reactify = require('reactify');
var browserSync = require('browser-sync').create();

var path = {
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: 'dist',
  ENTRY_POINT: './src/App.js'
};

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    var watcher = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [[babelify, { "optional": ["es7.decorators"] }], reactify],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    watcher.on('update', function() {
        var stream = watcher.bundle()
            .pipe(source(path.OUT))
            .pipe(gulp.dest(path.DEST))
            .on('finish', function() {
                browserSync.reload();
            });
    });

    return watcher.bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST));
});

gulp.task('default', ['watch']);
