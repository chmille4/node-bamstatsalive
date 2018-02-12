
const { spawn } = require('child_process');

let pathToModule = require.resolve('node-bamtools')
let path = require('path').dirname(pathToModule) + "/bamtools/"

let compile = spawn('./build.sh',[path]);

compile.stdout.pipe(process.stdout);
compile.stderr.pipe(process.stderr);

compile.on('end', () => {
	console.log('compiling ... done')
})