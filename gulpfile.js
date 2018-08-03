var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var config = require( './ftp-config/ftp.json' );

gulp.task( 'deploy', function () {

	var conn = ftp.create( {
		host:     config.host,
		user:     config.user,
		password: config.password,
		parallel: 10,
		log:      gutil.log
	} );

	var globs = [
		'just4help.ru/**'
	];

	return gulp.src( globs, { base: '.', buffer: false } )
		.pipe( conn.dest( 'www/' ) );
} );