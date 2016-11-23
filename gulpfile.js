var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),




gulp.task('hello',function(){
	console.log("Hello world");
});
gulp.task('html',function(){
	console.log("Html saved");
});
gulp.task('styles',function(){

	return gulp.src('./app/assets/styles/style.css')

	.pipe(postcss([cssvars, nested, autoprefixer]))

	.pipe(gulp.dest('./app/temp/styles'));
	



	console.log("Hello style changed");
})



gulp.task('watch', function(){
	
	watch('./app/index.html', function(){
		gulp.start('html');

	});

    watch('./app/assets/styles/**/*.css', function(){
		
		gulp.start('styles');

			
		
		});	
    watch('./app/assets/sstyles/**/*.scss', function(){
		gulp.start('styles1');
			
		});



});











