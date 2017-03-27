#!/usr/bin/env node
const optimus = require('vorpal')();
const http = require('http');
const cmd=require('node-cmd');
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
  cmd.get(
    'java -version',
    function(data,err) {
    console.log('Verifying if java is installed');
    if(!err) {
      console.log('Found java');
    } else {
      console.log('Java is not installed, install it manually');
    }
  });

  cmd.get(
        'appium -v',
        function(data,err){
          console.log("Verifying if appium is installed");
          if(!err) {
            console.log('Found appium with version : ',data);
          } else {
            console.log("Appium is not installed, installing it now..");
            cmd.get('npm install -g appium',function(data,err) {
              if(!err) {
                console.log('Installed appium successfully');
              } else {
                console.log('Failed to install appium, install it manually',err);
              }
            });
          }
        }
    );

    cmd.get(
      'redis-cli -v',
      function(data,err) {
      console.log("Verifying if redis is installed");
      if(!err) {
        console.log('Found Redis with version:',data);
      } else {
        console.log("Redis is not installed, installing it now..");
        cmd.get('brew install redis', function(data,err) {
          if(!err) {
            console.log('Installed redis successfully');
          } else {
            console.log('Failed to install redis, install it manually',err);
          }
        });
      }
    });
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
