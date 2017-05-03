#!/usr/bin/env node
const cmd=require('node-cmd');
var logSymbols = require('log-symbols');
var os = require('os');

module.exports = function Setup() {
  var error;
  this.instDeps = function() {
    switch(os.platform()) {
      case "darwin":
      cmd.get('brew -v', function(data,err) {
        error = err;
        if(err) {
          cmd.get('/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"',function(data,err) {
            if(err) {
              console.log(logSymbols.error,"Unable to install HomeBrew, cannot proceed with dependencies check. Install HomeBrew manually from 'https://brew.sh/' and try again.");
            }
          })
        }
      })
      break;
      case "win32":
      cmd.get('choco -v', function(data,err) {
        error = err;
        if(err) {
          cmd.get('@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString(\'https://chocolatey.org/install.ps1\'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"',function(data,err) {
            if(err) {
              console.log("Unable to install choclatey, cannot proceed with dependencies check. Install it manually from 'https://chocolatey.org/install' and try again");
            }
          })
        }
      })
      break;
      case "linux":
      cmd.get('brew -v', function(data,err) {
        error = err;
        if(err) {
          console.log("Cannot find linux brew, install it manally from 'http://linuxbrew.sh/' and try again");
        }
      })
      break;
    }

  }
}
