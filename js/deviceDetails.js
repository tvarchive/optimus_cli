#!/usr/bin/env node
const cmd = require('node-cmd');
var logSymbols = require('log-symbols');
var Table = require('console.table');
var Device = require('./devices');


module.exports = function DeviceDetails(arg) {

  this.getUDID = function(data) {
    arg.getUDID().
    then(data=>{
      console.log("UDID");
      console.log(data);
    }).
    catch(err=>{
      console.log("No device(s) connected to the system !");
    });
  }

  this.getDeviceType = function(data) {
    arg.getDeviceType().
    then(data=>{
      console.log("Device type");
      if(data.includes("device:vbox")){
        console.log("Emulator");
      }
      else{
        console.log("Mobile device");
      }
    }).
    catch(err => {
      console.log("No device(s) connected to the system !");
    });
  }
}
