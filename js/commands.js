#!/usr/bin/env node
const cmd=require('node-cmd');
var logSymbols = require('log-symbols');
var os = require('os');
var ProgressBar = require('progress');
var colors = require('colors/safe');
var Promise = require('promise');

module.exports = function Commands(){
  var error;
  this.checkJava= function() {
      cmd.get(
        'java -version',
        function(data,err) {
        console.log(logSymbols.info,'Verifying if java is installed');
        error = err;
        if(!err) {
          console.log(logSymbols.success,'Java is installed.');
        } else {
          switch (os.platform()) {
            case "darwin":
            console.log(logSymbols.warning,colors.yellow('Java is not installed, installing it now..'));
              cmd.get('brew cask install java',function(data,err) {
              error = err;
              if(!err) {
                console.log(logSymbols.success,'Installed java successfully');
              } else {
                console.log(logSymbols.error,colors.red('Failed to install java, install it manually'));
              }
            });
              break;
            case 'linux':
            console.log(logSymbols.error,colors.red('Java is not installed, installing it manually!!'));
            break;
            case "win32":
            console.log(logSymbols.warning,colors.yellow('Java is not installed, installing it now..'));
              cmd.get('choco install jdk8',function(data,err) {
              error = err;
              if(!err) {
                console.log(logSymbols.success,'Installed java successfully');
              } else {
                console.log(logSymbols.error,colors.red('Failed to install java, install it manually'));
              }
            });
              break;
          }
        }
      });
}

this.checkAppium = function() { return new Promise(function(fulfill,reject) {
  cmd.get(
        'appium -v',
        function(data,err){
          error = err;
          console.log(logSymbols.info,"Verifying if appium is installed");
          if(!err) {
            console.log(logSymbols.success,'Appium is installed.');
          } else {
            console.log(logSymbols.warning,colors.magenta("Appium is not installed, installing it now .."));
            var appiumInstalled;
            cmd.get('npm install -g appium',function(data,err) {
              error = err;
              if(!err) {
                appiumInstalled = true;
                console.log(logSymbols.success,'Installed appium successfully');
              } else {
                appiumInstalled = false;
                console.log(logSymbols.error,colors.red('Failed to install appium, install it manually'),err);
              }
            });
          }
}) });

}

  this.checkRethinkDB = function() {
    var rethinkInstalled;
    cmd.get(
      'rethinkdb -v',
      function(data,err) {
      console.log(logSymbols.info,"Verifying if RethinkDB is installed");
      if(!err) {
        rethinkInstalled = true;
        console.log(logSymbols.success,'RethinkDB is installed');
      } else {
        rethinkInstalled=false;
        console.log(logSymbols.warning,colors.cyan("RethinkDB is not installed, installing it now.."));
        switch (os.platform()) {
          case "darwin": case "linux":
          cmd.get('brew install rethinkdb', function(data,err) {
            if(!err) {
              console.log(logSymbols.success,'Installed RethinkDB successfully');
            } else {
              console.log(logSymbols.error,colors.red('Failed to install RethinkDB, install it manually from "https://rethinkdb.com/docs/install/ubuntu/"'),err);
            }
          });
            break;
            case "win32":
            cmd.get('choco install rethinkdb', function(data,err) {
              if(!err) {
                console.log(logSymbols.success,'Installed RethinkDB successfully');
              } else {
                console.log(logSymbols.error,colors.red('Failed to install RethinkDB, install it manually'),err);
              }
            });
          break;
        }

      }
    });
  }

  this.checkRedis = function() {
    return new Promise(function(fulfill,reject){
      cmd.get(
        'redis-cli -v',
        function(data,err) {
        console.log(logSymbols.info,"Verifying if Redis is installed");
        if(!err) {
          console.log(logSymbols.success,'Redis is installed');
        } else {
          console.log(logSymbols.warning,colors.gray("Redis is not installed, installing it now.."));
          switch (os.platform()) {
            case "darwin": case "linux":
            cmd.get('brew install redis', function(data,err) {
              if(!err) {
                console.log(logSymbols.success,'Installed Redis successfully');
              } else {
                console.log(logSymbols.error,colors.red('Failed to install Redis, install it manually'),err);
              }
            });

              break;
              case "win32":
              cmd.get('choco install redis', function(data,err) {
                if(!err) {
                  console.log(logSymbols.success,'Installed Redis successfully');
                } else {
                  console.log(logSymbols.error,colors.red('Failed to install Redis, install it manually'),err);
                }
              });
            break;
          }

        }
      });
    })

  }

  this.checkAPT = function() {
    cmd.get('adb version', function(data,err) {
      error = err;
      console.log(logSymbols.info,"Verifying if android platform tools is installed");
      if(!err) {
        console.log(logSymbols.success,'Android platform tools is installed.');
      } else {
        console.log(logSymbols.warning,colors.grey('Android platform tools is not found, installing it now..'));
        switch (os.platform()) {
          case "darwin":case "linux":
          cmd.get('brew install android-platform-tools',function(data,err) {
            error = err;
            if(!err) {
              console.log(logSymbols.success,'Installed, android platform tools successfully.');
            } else {
              console.log(logSymbols.error,colors.red('Failed to install android platform tools, install it manually'));
            }
          })
            break;
            case "win32":
            cmd.get('choco install adb',function(data,err) {
              error = err;
              if(!err) {
                console.log(logSymbols.success,'Installed, android platform tools successfully.');
              } else {
                console.log(logSymbols.error,colors.red('Failed to install android platform tools, install it manually'));
              }
            })
              break;
          default:

        }
      }
    });
  }

  this.checkXcode = function() {
    switch (os.platform()) {
      case "darwin":
      cmd.get('xcodebuild -version',function(data,err) {
        error = err;
        console.log(logSymbols.info,'Verifying if xcode is installed');
        if(!err) {
          console.log(logSymbols.success,'Found xcode on this machine.');
        } else {
          console.log(logSymbols.error,colors.red('Xcode is not installed, install it manually!!'));
        }
      });
        break;
      default:
      console.log(logSymbols.info,'Your plaform does not support xcode');
      break;
    }
  }
}
