#!/usr/bin/env node
const optimus = require('vorpal')();
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var git = require("nodegit");
var mkdirp = require('mkdirp');
var ProgressBar = require('ascii-progress');

function createproject(args,callback) {
  var projectfolder = __dirname+"/"+args.project_name;
  mkdirp(projectfolder, function (err) {
      if (err) console.error(err)
  });
  git.Clone("https://github.com/testvagrant/optimusTemplate.git",projectfolder,{}).then(function (repo) {
  console.log("Created project '"+args.project_name+"'");
}).catch(function (err) {
    console.log(err);
});

var bar = new ProgressBar('   creating [:bar] :rate/bps :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 200,
    total: 20000
  });
var iv = setInterval(function () {
  bar.tick();
  if (bar.completed) {
    clearInterval(iv);
  }
}, 250);

 function progress() {
   iv;
 }
 callback();
}

function createtestfeed() {
  const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World\n');
    });
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
}

optimus
  .command('create project <project_name>', 'Create a new optimus project.')
  .action(createproject);

optimus
  .command('create testfeed <testfeed_name>', 'Create a testfeed for the project')
  .action(createtestfeed);

optimus
  .delimiter('optimus$')
  .show();
