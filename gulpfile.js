var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');

gulp.task("compile", () => {
  return gulp.src("./css/style.scss")
    .pipe(sass())
    .pipe(gulp.dest((file) => {
      return file.base;
    }));
});

gulp.task('autoprefix', function () {
  return gulp.src('./css/*.css')
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 4 version'],
          cascade: true
      }))
      .pipe(gulp.dest((file) => {
        return file.base;
      }));
});

gulp.task("watch", () => {
  return gulp.watch("./css/*.scss", gulp.series('compile'));
});

gulp.task("default", gulp.series('compile'));