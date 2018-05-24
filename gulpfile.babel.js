'use strict';

import gulp from 'gulp';
import less from 'gulp-less';
import watch from 'gulp-watch';
import CleanCSS from 'gulp-clean-css';

function swallow(e) {
  let d = new Date();
  let time = [ d.getHours(), d.getMinutes(), d.getSeconds() ];
  console.log(time.join(':') + ' > ' + e.message);
  this.emit('end');
};

export function watcher() {
  return watch('./src/**/*.less', compile);
};

export function compile() {
  return gulp.src( './src/bloks.less' )
    .pipe( less() )
    .on( 'error', swallow )
    .pipe( CleanCSS({ compatibility: 'ie8' }) )
    .pipe( gulp.dest('./dist') );
};

const inDev = gulp.series(compile, watcher);
export default inDev;