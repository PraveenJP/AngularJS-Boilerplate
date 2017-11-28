'use strict'
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var cache = require('gulp-cache');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('app', function(){
    return gulp.src(['ngapp/components/app.module.js','ngapp/components/login/login.controller.js','ngapp/components/dashboard/dashboard.controller.js','ngapp/components/login/login.service.js','ngapp/components/dashboard/dashboard.service.js','ngapp/components/shared/footer/footer.directive.js','ngapp/components/shared/header/header.directive.js','ngapp/components/shared/modal/modal.directive.js'])
        .pipe(concat('app.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(ngAnnotate())
        .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
        .pipe(gulp.dest('ngapp/components/'));
});

gulp.task('watch:app', function () {
    gulp.watch(['ngapp/components/app.module.js','ngapp/components/login/login.controller.js','ngapp/components/dashboard/dashboard.controller.js','ngapp/components/login/login.service.js','ngapp/components/dashboard/dashboard.service.js','ngapp/components/shared/footer/footer.directive.js','ngapp/components/shared/header/header.directive.js','ngapp/components/shared/modal/modal.directive.js'],['app']);
});

gulp.task('js', function(){
    return gulp.src(['ngapp/assets/js/scripts.js','node_modules/angular/angular.min.js','node_modules/angular-ui-router/release/angular-ui-router.js'])
        .pipe(concat('scripts.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
        .pipe(gulp.dest('ngapp/dist/js'));
});

gulp.task('watch:js', function () {
    gulp.watch(['ngapp/assets/js/scripts.js','node_modules/angular/angular.min.js','node_modules/angular-ui-router/release/angular-ui-router.js'],['js'])
})

gulp.task('images', function(){
    return gulp.src('ngapp/assets/images/*')
        .pipe(cache(imagemin({optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('ngapp/dist/images/'))
});

gulp.task('css', function(){
    return gulp.src(['ngapp/assets/css/style.css'])
        .pipe(concat('main.css'))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglifycss().on('error',function(e){
            console.log(e)
        }))
        .pipe(gulp.dest('ngapp/dist/css'))
});

gulp.task('watch:css', function () {
    gulp.watch(['ngapp/assets/css/style.css'],['css'])
});

gulp.task('default', ['app','js','css','watch:app','watch:js','watch:css'])
