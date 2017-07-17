#!/usr/bin/env node
const cmd = require('node-cmd');
var Table = require('console.table');

module.exports = function DeviceDetails(arg) {
  this.getDevices = function() {
    arg.getUDID
    .then(arg.getDeviceName)
    .then(arg.getType)
    .then(arg.getOSVersion)
    .then(function(fulfilled) {
      console.table(fulfilled);
    })
    .catch(function(error){
      console.log(error.message);
    });
  }
}
