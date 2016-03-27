var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('html', function() {
  gulp.src("./src/*.html")
  .pipe(gulp.dest("./dest/").on('change', reload))
});

gulp.task('image', function() {
  gulp.src("./src/img/*")
  .pipe(gulp.dest("./dest/img"))
});

gulp.task('css', function() {
  return gulp.src("./src/css/*.css")
	.pipe(autoprefixer())
    .pipe(gulp.dest("./dest/css"))
    .pipe(reload({stream: true}));
});

gulp.task('serve', ['html', 'css', 'image'], function() {

  browserSync.init({
    server: './dest/'
  });
  
 gulp.watch("./src/img/*", ['image']);
  gulp.watch("./src/css/*.css", ['css']);
  gulp.watch("./src/*.html", ['html']).on('change', reload);
});

gulp.task('default', ['serve']);