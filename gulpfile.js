const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function styles() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
}

function code() {
    return gulp.src("./src/js/**/*.js")
        .pipe(gulp.dest('./dist/js'));
}

function staticFiles() {
    return gulp.src("./src/static/**/*", { encoding: false })
        .pipe(gulp.dest('./dist/static'));
}

function html() {
    return gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"));
}

const build = gulp.parallel(styles, html, code, staticFiles);

function watch(done) {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch('./scss/**/*.scss', styles);

    gulp.watch('./src/**/*.html').on('change', gulp.series(html, browserSync.reload));
    gulp.watch('./src/js/**/*.js').on('change', gulp.series(code, browserSync.reload));
    gulp.watch('./src/static/**/*').on('change', gulp.series(staticFiles, browserSync.reload));

    done();
}

exports.build = build;
exports.watch = gulp.series(build, watch);
exports.default = exports.watch;