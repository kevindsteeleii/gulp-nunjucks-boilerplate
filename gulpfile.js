const gulp = require("gulp"); 
const series = gulp.series;
const parallel = gulp.parallel;
const nunjucksRender = require('gulp-nunjucks-render');
const data = require("gulp-data");
const beautify = require("gulp-beautify");
const removeEmptyLines = require("gulp-remove-empty-lines");
const jeditor = require("gulp-json-editor");
const rename = require("gulp-rename");


function buildFromNJK() {
  return gulp.src("src/pages/*")
  .pipe(data(function() {
    return require("./src/data/data.json");
  }))
  .pipe(nunjucksRender({
    path: ['src/templates']
  }))
  .pipe(beautify.html({indent_size: 2}))
  .pipe(removeEmptyLines())
  .pipe(gulp.dest('dist'))
}

function editJSON() {
  
}



exports.sampleSetup = series(buildFromNJK);