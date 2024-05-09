/* 
###############
Compressão SASS
############### 
*/

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/styles'));
}
exports.sass = compilaSass;

/* 
###############
Compressão SASS
############### 
*/



/* 
###############
Compressão JS
############### 
*/

const uglify = require('gulp-uglify');

function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}
exports.javascript = comprimeJS;

/* 
###############
Compressão JS
############### 
*/



/* 
###############
Compressão IMG
############### 
*/

const imagemin = require('gulp-imagemin');

function comprimeImg() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}
exports.images = comprimeImg;

/* 
###############
Compressão IMG
############### 
*/

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial : false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial : false }, gulp.series(comprimeJS));
    gulp.watch('./source/images/*', {ignoreInitial : false }, gulp.series(comprimeImg));
}