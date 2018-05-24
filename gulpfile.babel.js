'use strict';

import log from 'fancy-log';
import gulp from 'gulp';
import less from 'gulp-less';
import watch from 'gulp-watch';
import CleanCSS from 'gulp-clean-css';

let error = false;

function eat(e) {
  error = e.message;
  this.emit('end');
};

function say() {
  log(error ? error : 'Compiled');
  if (error) error = false;
};

export function watcher() {
  return watch('./src/**/*.less', compile);
};

export function compile() {
  return gulp.src( './src/bloks.less' )
    .pipe( less() )
    .on( 'error', eat )
    .pipe( CleanCSS({ compatibility: 'ie8' }) )
    .pipe( gulp.dest('./dist') )
    .on( 'end', say);
};

const inDev = gulp.series(compile, watcher);
export default inDev;