const imagemin = require('gulp-imagemin');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function scripts() {
 return gulp.src('./www/src/scripts/*.js')
 .pipe(uglify())
 .pipe(gulp.dest('./www/dist/scripts'))
}

function styles() {
 return gulp.src('./www/src/styles/*.scss')
 .pipe(sass({outputStyle: 'compressed'}))
 .pipe(gulp.dest('./www/dist/styles'));
}

function images() {
 return gulp.src('./www/src/images/**/*')
 .pipe(imagemin())
 .pipe(gulp.dest('./www/dist/images'));
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
 gulp.watch('./www/src/styles/**/*.scss', gulp.parallel(styles))
 gulp.watch('./www/src/scripts/*.js', gulp.parallel(scripts))
}