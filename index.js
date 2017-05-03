#!/usr/bin/env node
const optimus = require('vorpal')();
const http = require('http');
const cmd=require('node-cmd');
var Commands = require('./js/commands');
var Setup = require('./js/setup');
const hostname = '127.0.0.1';
const port = 3000;
var git = require("nodegit");
var mkdirp = require('mkdirp');
var ProgressBar = require('progress');
var pjson = require('./package.json');
var TestFeed = require('./js/testfeed');
var del = require('del');
var colors = require('colors/safe');
var Sync = require('sync');
var Promise = require('promise');
const async = require('async');
var inits = require('inits');

inits.options.logTimes=false;
inits.options.showErrors=false;
inits.init(function(callback) {
  new Setup().instDeps();
  callback();
});

function createproject(args,callback) {
  var projectfolder = args.project_name;
  process.stdout.write(colors.magenta("creating project '"+args.project_name+"'.."));
  mkdirp(projectfolder, function (err) {
      if (err) console.error(err)
  });
  var projCreated;
  var obj = git.Clone("https://github.com/testvagrant/optimusTemplate.git",projectfolder,{}).then(function (repo) {
    del([projectfolder+"/.git"]);
    projCreated = true;
    console.log(colors.green("\nCreated project '"+args.project_name+"'"));
}).catch(function (err) {
    console.log(err);
});
var bar = new ProgressBar('Estimated time to download :total, time elapsed so far :elapsed', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: 20000
  });
var iv = setInterval(function () {
  if(projCreated===undefined) {
  // bar.tick();
  process.stdout.write(colors.magenta("."));

}
  if (projCreated!=undefined) {
    clearInterval(iv);
  }
}, 350);

 function progress() {
   iv;
 }
}

function createtestfeed(args,callback) {
  console.log("This is a wip command, look out for further versions");
  // var testfeed = new TestFeed(args);
  // testfeed.launchTestfeed();
  callback();
}

function setup(args,callback) {
    var commands = new Commands();
    commands.checkJava();
    commands.checkRedis();
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
  .autocomplete(['create project <project_name>'])
  .action(createproject);

optimus
  .command('create testfeed <testfeed_name>', 'Create a testfeed for the project')
  .autocomplete(['create project <project_name>'])
  .action(createtestfeed);

optimus
  .command('optimus-doctor','sets up the optimus environment')
  .autocomplete(['optimus-doctor','optimus -v'])
  .action(setup);

optimus
  .command('optimus','get the optimus version')
  .autocomplete(['optimus-doctor','optimus -v'])
  .option('-v,--version','Prints version')
  .action(appVersion);

optimus
  .delimiter('optimus$')
  .show();
