var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var browserSync = require('browser-sync').create();

var path = {
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: 'dist',
  ENTRY_POINT: './src/App.js'
};

watchify.args.debug = true;
var bundler = watchify(browserify(path.ENTRY_POINT, watchify.args));
bundler.transform(babelify.configure({
    optional: ["es7.decorators", "es7.objectRestSpread"],
    sourceMapRelative: 'src'
}));

bundler.on('update', bundle);

function bundle() {
    return bundler.bundle()
        .on('error', function (err) {
            gutil.log(err.message);
            browserSync.notify("Browserify Error!");
            this.emit("end");
        })
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST))
        .pipe(browserSync.stream({once: true}));
}

gulp.task('bundle', function () {
    return bundle();
});

gulp.task('default', ['bundle'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
