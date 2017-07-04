#!/usr/bin/env node
const cmd = require('node-cmd');
var logSymbols = require('log-symbols');
var Table = require('console.table');
var Device = require('./devices');

module.exports = function DeviceDetails(arg) {
  var udid,deviceName,type,osVersion;

  this.getDeviceDetails = function(data) {
    udid = arg.getUDID();
    console.log(udid);
  }

  this.getDeviceType = function(){
    arg.getDeviceType();
  }
}
