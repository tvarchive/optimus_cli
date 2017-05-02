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
var pjson = require('./package.json');
var TestFeed = require('./js/testfeed');


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

function createtestfeed(args,callback) {
  var testfeed = new TestFeed(args);
  testfeed.launchTestfeed();
  callback();
}

function setup(args,callback) {
  var commands = new Commands();
  commands.checkJava();
  commands.checkAppium();
  commands.checkRethinkDB();
  commands.checkAPT();
  commands.checkXcode();
}

function appVersion(args,callback) {
  console.log(pjson.version);
  callback();
}

optimus
  .command('create project <project_name>', 'Create a new optimus project.')
  .autocomplete(['checkup','create project <project_name>','optimus -v'])
  .action(createproject);

optimus
  .command('create testfeed <testfeed_name>', 'Create a testfeed for the project')
  .autocomplete(['checkup','create project <project_name>','optimus -v'])
  .action(createtestfeed);

optimus
  .command('checkup','sets up the optimus environment')
  .autocomplete(['checkup','create project <project_name>','optimus -v'])
  .action(setup);
optimus
  .command('optimus','get the optimus version')
  .autocomplete(['checkup','create project <project_name>','optimus -v'])
  .option('-v,--version','Prints version')
  .action(appVersion);

optimus
  .delimiter('optimus$')
  .show();
