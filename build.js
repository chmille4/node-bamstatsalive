

const { spawn } = require('child_process');
const { getInstalledPath } = require('get-installed-path')


getInstalledPath('node-bamtools', {
  local: true
}).then((path) => {
  console.log(path)
  // let compile = spawn('BAMTOOLS=' + path + ' make',[],{cwd: './bamstatsAlive'});
  let compile = spawn('make',[],{cwd: './bamstatsAlive', env:{'BAMTOOLS':path+'/bamtools/'}});

  compile.stdout.pipe(process.stdout);
  compile.stderr.pipe(process.stderr);

  compile.on('end', () => {
  	console.log('compiling ... done')
  })
})