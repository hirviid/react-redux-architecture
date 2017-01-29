var fs = require('fs');
var mkdirp = require('mkdirp');
var pjson = require('../package.json');
var sourceDir = 'src/';
var destinationDir = 'src/node_modules/@' + pjson.name + '/';

if (!fs.existsSync(destinationDir)){
    mkdirp.sync(destinationDir);
}

fs.readdir(sourceDir, (err, files) => {
  files.forEach(file => {
    if (fs.lstatSync(sourceDir + file).isDirectory() && file !== 'node_modules') {
      var d = destinationDir + file;
      fs.exists(d,function(e){
        e||fs.symlinkSync('../../' + file,d,'dir')
      });
    }
  });
});
