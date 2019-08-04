var gulp = require('gulp'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();
    minify = require("gulp-babel-minify");

var DEST = 'build/';

// gulp.task('base-css', function() {
//     gulp.start('sass')
//     gulp.start('sass-minify')
//     gulp.start('base-css')
//     return gulp.src([        
//         'vendors/jquery-ui/jquery-ui.min.css',
//         'vendors/lou-multi-select/css/multi-select.dist.css',
//         'vendors/select2/dist/css/select2.min.css',
//         'vendors/select2/dist/css/select2-bootstrap.min.css',
//         'vendors/jquery-confirm/jquery-confirm.min.css',
//         'vendors/pnotfy/pnotify.custom.min.css',
//         'vendors/nprogress/nprogress.css',
//         'vendors/switchery/dist/switchery.min.css',
//         'vendors/bootstrap-daterangepicker/daterangepicker.css',
//         'vendors/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css',
//         'vendors/iCheck/skins/flat/green.css',
//         'build/css/bem-icons.css',
//         'build/css/driver.min.css',
//         'build/css/custom.min.css',
//       ])
//       .pipe(concatCss('base.css'))
//       .pipe(gulp.dest(DEST+'/css'));
// });

// gulp.task('base-script', function() {
//     gulp.start('scripts')
//     return gulp.src([        
//         'vendors/jquery/dist/jquery.min.js',
//         'vendors/jquery-ui/jquery-ui.min.js',
//         'vendors/lou-multi-select/js/jquery.multi-select.js',
//         'vendors/select2/dist/js/select2.min.js',
//         'vendors/quicksearch/jquery.quicksearch.js',
//         'vendors/jquery-confirm/jquery-confirm.min.js',
//         'vendors/bootstrap/dist/js/bootstrap.min.js',
//         'vendors/fastclick/lib/fastclick.js',
//         'vendors/nprogress/nprogress.js',
//         'vendors/Chart.js/dist/Chart.min.js', 
//         'vendors/iCheck/icheck.min.js',
//         'vendors/DateJS/build/date.js',
//         'vendors/moment/min/moment.min.js',
//         'vendors/moment/locale/pt-br.js',
//         'vendors/moment/locale/es.js',
//         'vendors/bootstrap-daterangepicker/daterangepicker.js',
//         'vendors/bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//         'vendors/pnotfy/pnotify.custom.min.js',
//         'vendors/switchery/dist/switchery.min.js',
//         'vendors/datatables.net/js/jquery.dataTables.min.js',
//         'vendors/datatables.net-bs/js/dataTables.bootstrap.min.js',
//         'vendors/parsleyjs/dist/parsley.min.js',
//         'build/js/moment-duration-format.js',
//         'vendors/jquery.translate/jquery.translate.js',
//         'vendors/Flot/jquery.flot.js',
//         'vendors/Flot/jquery.flot.time.js',
//         'build/js/translation.js',
//         'build/js/driver.min.js',
//         'build/js/custom.min.js',
//       ])
//       .pipe(concat('base.js'))
//       .pipe(gulp.dest(DEST+'/js'))
//       .pipe(rename({suffix: '.min'}))
//       .pipe(uglify())
//       .pipe(gulp.dest(DEST+'/js'))
//     //   .pipe(browserSync.stream());
// });

// gulp.task('scripts', function() {
//     return gulp.src([
//         'src/js/helpers/*.js',
//         'src/js/*.js',
//       ])
//       .pipe(concat('custom.js'))
//       .pipe(gulp.dest(DEST+'/js'))
//       .pipe(rename({suffix: '.min'}))
//       .pipe(uglify())
//       .pipe(gulp.dest(DEST+'/js'))
//     //   .pipe(browserSync.stream());
// });

// // gulp.task('relatorio-scripts', function() {
// //     return gulp.src([
// //         'src/js/relatorio/*.js',
// //         ])
// //         .pipe(concat('relatorio.mjs'))
// //         .pipe(gulp.dest(DEST+'/js'))
// //         .pipe(rename({suffix: '.min'}))
// //         .pipe(minify({
// //                 mangle: {
// //                     keepClassName: true
// //                 }
// //             }))
// //         .pipe(rename({extname: ".js"}))
// //         .pipe(gulp.dest(DEST+'/js'))
// // });


// // TODO: Maybe we can simplify how sass compile the minify and unminify version
// var compileSASS = function (filename, options) {
//   return sass('src/scss/*.scss', options)
//         .pipe(autoprefixer('last 2 versions', '> 5%'))
//         .pipe(concat(filename))
//         .pipe(gulp.dest(DEST+'/css'))
//         // .pipe(browserSync.stream());
// };

// gulp.task('sass', function() {
//     return compileSASS('custom.css', {});
// });

// gulp.task('sass-minify', function() {
//     return compileSASS('custom.min.css', {style: 'compressed'});
// });

// // gulp.task('browser-sync', function() {
// //     browserSync.init({
// //         server: {
// //             baseDir: './'
// //         },
// //         startPath: './production/index.html'
// //     });
// // });

// gulp.task('watch', function() {
//   // Watch .html files
// //   gulp.watch('production/*.html', browserSync.reload);
//   // Watch .js files
//   gulp.watch('src/js/*.js', ['base-script']);
//   // Watch grid .js files
//   gulp.watch('src/js/grid/*.js', ['grid-scripts']);
//   // Watch map .js files
//   gulp.watch('src/js/map/*.js', ['map-scripts']);
//   // Watch relatorio .js files
//   gulp.watch('src/js/relatorio/*.js', ['relatorio-scripts']);
//   // Watch relatorio .js files
//   gulp.watch('src/js/rel_handlers/*.js', ['relatorio-handlers']);
//   // Watch .scss files
//   gulp.watch('src/scss/*.scss', ['base-css']);
// });

// Default Task
gulp.task('default', 'watch');