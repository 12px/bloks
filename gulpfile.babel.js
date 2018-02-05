'use strict';

import gulp from 'gulp';
import less from 'gulp-less';
import CleanCSS from 'gulp-clean-css'

gulp.task('compile', () => {
  return gulp.src( './theme/bloks.less' )
    .pipe( less() )
    .pipe( CleanCSS({ compatibility: 'ie8' }) )
    .pipe( gulp.dest('./build') );
});
