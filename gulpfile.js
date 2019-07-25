// Modules
const gulp = require("gulp")
const terser = require("gulp-terser"),
rename = require("gulp-rename"),
sass = require("gulp-sass"),
cssnano = require("gulp-cssnano"),
autoprefixer = require("gulp-autoprefixer"),
eslint = require("gulp-eslint"),
browserSync = require("browser-sync").create()

gulp.task("eslint", function(){
    return gulp
    .src("./js/*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

// Converts SASS to CSS, prefixes, and minifies to buld dir
gulp.task('sass', function(){
    return gulp
    //locates css files
    .src("./sass/style.scss")
    // converts sass to css
    .pipe(sass())
    //adds prefixes for browser compatibility
    .pipe(autoprefixer())
    //adds css to build dir
    .pipe(gulp.dest("./build/css"))
    //minifies css
    .pipe(cssnano())
    //renames css files
    .pipe(rename("style.min.css"))
    //adds final output to build dir
    .pipe(gulp.dest("./build/css"))
    //syncs browser whenever change is made(wait add later)
    .pipe(browserSync.stream())
})



gulp.task("default", function(){

    browserSync.init({
        server:{
            baseDir: "./"
        }
    })

    gulp.watch("./js/*.js", gulp.series(["scripts", "eslint"])).on("change", browserSync.reload)
    gulp.watch("./sass/*.scss", gulp.series("sass")).on("change", browserSync.reload)
    gulp.watch("./*html").on("change", browserSync.reload)
})

gulp.task("scripts", function(){
    return gulp
    .src("./js/*.js")
    .pipe(terser())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest("./build/js"))
})