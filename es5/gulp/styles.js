'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles', function() {

    var injectFiles = gulp.src([
        path.join(conf.paths.src, '/app/**/*.css'),
        path.join('!' + conf.paths.src, '/app/index.css')
    ], {
        read: false
    });

    return gulp.src([
            path.join(conf.paths.src, '/app/index.css')
        ])
        .pipe($.inject(injectFiles))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe($.sourcemaps.init())
        .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')))
        .pipe(browserSync.reload({
            stream: true 
        }));
});
