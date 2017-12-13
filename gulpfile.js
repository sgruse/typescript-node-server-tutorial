// Dependencies
const gulp = require('gulp')
const ts = require('gulp-typescript')
const shell = require('gulp-shell')

const tsProject = ts.createProject('tsconfig.json')

// Task 1
const compileTS = 'compileTypescript'
gulp.task(compileTS, () => {
	return tsProject.src()
	.pipe(tsProject())
	.js.pipe(gulp.dest('dist'))
})

// Task 2
const startServer = 'startServer'
const serverStartCommand = 'node ./dist/index.js'
gulp.task(startServer, [compileTS], shell.task(serverStartCommand))

// Gulp start command
gulp.task('default', [startServer])
