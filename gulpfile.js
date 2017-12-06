const gulp = require('gulp')
const ts = require('gulp-typescript')
const del = require('del')
const shell = require('gulp-shell')

const tsProject = ts.createProject('tsconfig.json')

const compileTS = 'compileTypescript'
gulp.task(compileTS, () => {
	return tsProject.src()
	.pipe(tsProject())
	.js.pipe(gulp.dest('dist'))
})

const startServer = 'startServer'
const serverStartCommand = 'node ./dist/index.js'
gulp.task(startServer, [compileTS], shell.task(serverStartCommand))

gulp.task('default', [startServer])
