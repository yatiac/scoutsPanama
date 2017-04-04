var gulp = require('gulp');
var rename = require('gulp-rename');   
var htmlmin = require('gulp-htmlmin');
 
gulp.task('html', function() {
 return gulp.src('preindex.html')
    .pipe(htmlmin({
        collapseWhitespace: true, 
        removeComments: true, 
        minifyJS: true
    }))    
    .pipe(rename('index.html'))
    .pipe(gulp.dest(''));
});