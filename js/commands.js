#!/usr/bin/env node
const cmd=require('node-cmd');
var logSymbols = require('log-symbols');

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
      console.log(logSymbols.warning,'Java is not installed, installing it now..');
      cmd.get('brew cask install java',function(data,err) {
        error = err;
        if(!err) {
          console.log(logSymbols.success,'Installed java successfully');
        } else {
          console.log(logSymbols.error,'Failed to install java, install it manually');
        }
      });
    }
  });
}

this.checkAppium = function() {
  cmd.get(
        'appium -v',
        function(data,err){
          error = err;
          console.log(logSymbols.info,"Verifying if appium is installed");
          if(!err) {
            console.log(logSymbols.success,'Appium is installed.');
          } else {
            console.log(logSymbols.warning,"Appium is not installed, installing it now..");
            cmd.get('npm install -g appium',function(data,err) {
              error = err;
              if(!err) {
                console.log(logSymbols.success,'Installed appium successfully');
              } else {
                console.log(logSymbols.error,'Failed to install appium, install it manually',err);
              }
            });
          }
        }
    );
  }

  this.checkRedis = function() {
    cmd.get(
      'redis-cli -v',
      function(data,err) {
      console.log(logSymbols.info,"Verifying if redis is installed");
      if(!err) {
        console.log(logSymbols.success,'Redis is installed');
      } else {
        console.log(logSymbols.warning,"Redis is not installed, installing it now..");
        cmd.get('brew install redis', function(data,err) {
          if(!err) {
            console.log(logSymbols.success,'Installed redis successfully');
          } else {
            console.log(logSymbols.error,'Failed to install redis, install it manually',err);
          }
        });
      }
    });
  }

  this.checkAPT = function() {
    cmd.get('adb version', function(data,err) {
      error = err;
      console.log(logSymbols.info,"Verifying if android platform tools is installed");
      if(!err) {
        console.log(logSymbols.success,'Android platform tools is installed.');
      } else {
        console.log(logSymbols.warning,'Android platform tools is not found, installing it now..');
        cmd.get('brew install android-platform-tools',function(data,err) {
          error = err;
          if(!err) {
            console.log(logSymbols.success,'Installed, android platform tools successfully.');
          } else {
            console.log(logSymbols.error,'Failed to install android platform tools, install it manually');
          }
        })
      }
    });
  }

  this.checkXcode = function() {
    cmd.get('xcodebuild -version',function(data,err) {
      error = err;
      console.log(logSymbols.info,'Verifying if xcode is installed');
      if(!err) {
        console.log(logSymbols.success,'Found xcode on this machine.');
      } else {
        console.log(logSymbols.error,'Xcode is not installed, install it manually!!');
      }
    });
  }
}
