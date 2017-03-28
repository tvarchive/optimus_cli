#!/usr/bin/env node
const optimus = require('vorpal')();
const http = require('http');
const cmd=require('node-cmd');
var Commands = require('./js/commands');
const hostname = '127.0.0.1';
const port = 3000;
var git = require("nodegit");
var mkdirp = require('mkdirp');
var ProgressBar = require('ascii-progress');

function createproject(args,callback) {
  var projectfolder = args.project_name;
  console.log("creating project..");
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
}, 350);

 function progress() {
   iv;
 }
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

function setup(args,callback) {
  var commands = new Commands();
  commands.checkJava();
  commands.checkAppium();
  commands.checkRedis();
  commands.checkAPT();
  commands.checkXcode();
}

optimus
  .command('create project <project_name>', 'Create a new optimus project.')
  .action(createproject);

optimus
  .command('create testfeed <testfeed_name>', 'Create a testfeed for the project')
  .action(createtestfeed);

optimus
  .command('checkup','sets up the optimus environment')
  .action(setup);

optimus
  .delimiter('optimus$')
  .show();
