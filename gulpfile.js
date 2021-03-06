'use strict';

// Load Module
const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// option
const sassOptions = {
  options: {
    outputStyle: 'compressed',
    sourceMap: false,
    sourceComment: false
  }
};

const autoprefixerOptions = {
  options: {
    browsers: ['last 3 version', 'ie >= 9', 'Android 4.0']
  }
};

// Read each Task
gulp.task('style', function(){
  const src = './src/scss/**/*.scss';
  const dest = './static/css';
  return gulp.src(src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(dest))
    // .pipe(browserSync.stream())
    .pipe(notify({
      title: 'scssCompiled！',
      message: new Date(),
      sound: 'Glass'
    })
  );
});

// Default task
gulp.task('default', function(){
  gulp.watch('./src/scss/**/*.scss', ['style']);
});
