#!/usr/bin/env node
const cmd=require('node-cmd');
var logSymbols = require('log-symbols');

module.exports = function Devices(){
  var error;
  this.getAllConnectedDevices = function() {
    console.log(logSymbols.info,"Getting all connected devices to the system...\n")
    cmd.get('adb devices -l', function(data,err) {
      error = err;
      console.log(logSymbols.info,"Finding android devices connected to the system...\n");
      console.log(logSymbols.info,"The android devices connected to the system are : \n\n "+data);
      if(!err) {
        console.log(logSymbols.success,'Devices displayed successfully !');
      } else {
        console.log(logSymbols.error,'No device(s) connected !');
      }
    });
    cmd.get('instruments -s devices', function(data,err) {
      error = err;
      console.log(logSymbols.info,"Finding iOS devices connected to the system...\n");
      console.log(logSymbols.info,"The iOS devices connected to the system are : \n\n "+data);
      if(!err) {
        console.log(logSymbols.success,'Devices displayed successfully !');
      } else {
        console.log(logSymbols.error,'No device(s) connected !');
      }
    });
  }

  this.getIOSDevices = function() {
    cmd.get('instruments -s devices', function(data,err) {
      error = err;
      console.log(logSymbols.info,"Finding iOS devices connected to the system...\n");
      console.log(logSymbols.info,"The iOS devices connected to the system are : \n\n "+data);
      if(!err) {
        console.log(logSymbols.success,'Devices displayed successfully !');
      } else {
        console.log(logSymbols.error,'No device(s) connected !');
      }
    });
  }

  this.getAndroidDevices = function() {
    cmd.get('adb devices -l', function(data,err) {
      error = err;
      console.log(logSymbols.info,"Finding android devices connected to the system...\n");
      console.log(logSymbols.info,"The android devices connected to the system are : \n\n "+data);
      if(!err) {
        console.log(logSymbols.success,'Devices displayed successfully !');
      } else {
        console.log(logSymbols.error,'No device(s) connected !');
      }
    });
  }
}
