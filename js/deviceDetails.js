#!/usr/bin/env node
const cmd = require('node-cmd');
var Table = require('console.table');
var logSymbols = require('log-symbols');
var colors = require('colors/safe');

module.exports = function DeviceDetails(arg) {
  this.getDeviceDetails = function() {
    arg.getUDID
    .then(arg.getDeviceName)
    .then(arg.getType)
    .then(arg.getOSVersion)
    .then(function(fulfilled) {
      console.log("\n"+logSymbols.info+colors.green(" List of devices connected to the system : \n"));
      console.table(fulfilled);
    })
    .catch(function(error){
      console.log("\n"+logSymbols.error+" "+colors.red(error.message)+"\n");
    });
  }
}
