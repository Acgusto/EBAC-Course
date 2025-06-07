import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import terser from 'gulp-terser';

const sass = gulpSass(dartSass);

// Task: Compress Images
export function compressImages() {
  return gulp.src('src/images/**/*.{jpg,jpeg,png,gif,svg}', {encoding: false})
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

// Task: Compile Sass
export function compileSass() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

// Task: Minify JS
export function minifyJs() {
  return gulp.src('src/js/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/js'));
}

// Optional: Watch for changes
export function watchFiles() {
  gulp.watch('src/images/**/*.{jpg,jpeg,png,gif,svg}', compressImages);
  gulp.watch('src/styles/**/*.scss', compileSass);
  gulp.watch('src/js/**/*.js', minifyJs);
}

// Default task: Run all in parallel
export default gulp.parallel(compressImages, compileSass, minifyJs);