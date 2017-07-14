#!/usr/bin/env node
const cmd = require('node-cmd');
var logSymbols = require('log-symbols');
var Table = require('console.table');


module.exports = function DeviceDetails(arg) {
  this.getDevices = function() {
    arg.getDeviceDetails
    .then(arg.getType)
    .then(function(fulfilled) {
      console.log(JSON.stringify(fulfilled));
    })
    .catch(function(error){
      console.log(error.message);
    });
  }
}
