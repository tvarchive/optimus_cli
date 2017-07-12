#!/usr/bin/env node
var program = require('commander');
const http = require('http');
var Commands = require('./js/commands');
var DeviceDetails = require('./js/deviceDetails');
var Devices = require('./js/devices');
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
var inits = require('inits');
var express = require('express');
var open = require('opn');
var path = require('path');
var fs = require('fs');
var Table = require('console.table');

inits.options.logTimes=false;
inits.options.showErrors=false;
inits.init(function(callback) {
  new Setup().instDeps();
  callback();
});

function createproject(args,callback) {
  var projectfolder;
  if(args.includes(" ")) {
    projectfolder = args.replace(" ","");
  } else {
   projectfolder = args;
  }
  fs.stat(projectfolder, function(err,callback){
    if(err) {
      process.stdout.write(colors.magenta("creating project '"+projectfolder+"'.."));
      mkdirp(projectfolder, function (err) {
          if (err) console.error(err)
      });
      var projCreated;
      var obj = git.Clone("https://github.com/testvagrant/optimusTemplate.git",projectfolder,{}).then(function (repo) {
        del([projectfolder+"/.git"]);
        del([projectfolder+"/docs"]);
        projCreated = true;
        console.log(colors.green("\nCreated project '"+projectfolder+"'"));
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
   } else {
     console.log(colors.red('Error: Project '+ projectfolder+' is already present in this directory. Create project with a different name.'));
   }
  });

}

function createtestfeed(args,callback) {
  var app = express();
  app.use(express.static(path.join(__dirname, 'web')))
  app.listen(3000);
  open('http://localhost:3000/testfeed.html');
}

function doctor(args,callback) {
    var commands = new Commands();
    commands.verifyJava();
    commands.verifyAppium();
    commands.verifyMongoDB();
    commands.verifyAPT();
    commands.verifyXcode();
    commands.verifyGradle();
}

function setup(args,callback) {
    var commands = new Commands();
    commands.installJava();
    commands.installAppium();
    commands.installMongoDB();
    commands.installAPT();
    commands.installFBSimctl();
    commands.installGradle();
}

function getAndroidDevices(args,callback){
  var devices = new Devices();
  var deviceDetails = new DeviceDetails(devices);
  deviceDetails.getUDID();
  deviceDetails.getDeviceType();
}


function appVersion() {
  console.log(pjson.version);
}

function help(){
  program.help();
  process.exit(0);
}

program
  .command('new <project_name>')
  .description('creates a new optimus project')
  .action(createproject);

program
  .command('testfeed')
  .description('Create a testfeed for the project')
  .action(createtestfeed);

program
  .command('doctor')
  .description('verifies the workspace for dependencies')
  .action(doctor);


program
  .command('setup')
  .description('sets up the optimus environment')
  .action(setup);

program
  .command('version')
  .description('displays the present optimus version')
  .action(appVersion);

//when options do not match,print "help"
program
  .option('')
  .action(help);


program
  .command('getandroiddevices')
  .description('gets all the connected android devices')
  .action(getAndroidDevices);

program.parse(process.argv);

//if no commands specified,display "help"
var NO_COMMAND_SPECIFIED = program.args.length === 0;

if (NO_COMMAND_SPECIFIED) {
  program.help();
}
