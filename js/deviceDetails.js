#!/usr/bin/env node
const cmd = require('node-cmd');
var logSymbols = require('log-symbols');
var Table = require('console.table');


module.exports = function DeviceDetails(arg) {
  this.getDevices = function() {
    arg.getDeviceDetails
    .then(function(fulfilled) {
      console.log(fulfilled);
    })
    .catch(function(error){
      console.log(error.message);
    });
  }
}
