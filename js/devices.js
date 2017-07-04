#!/usr/bin/env node
const cmd=require('node-cmd');
var logSymbols = require('log-symbols');

module.exports = function Devices(){
  var error;

  this.getUDID = function(callback){
    var udid;
    console.log("UDID\t\t\t\tDevice Type");
    cmd.get(
            `adb devices -l > devicesList
             cat devicesList | grep -E -o "[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}:[0-9]{1,4}"
             rm devicesList
            `
    , function(data,err) {
      if(!err){
        console.log(data);
        udid=data;
        callback(udid);
      }
      else{
        console.log("No device(s) connected to the system !");
      }
    });
  }

  this.getDeviceType = function(){
    cmd.get(
            `adb devices -l > devicesList
             cat devicesList | grep -o 'device:vbox'
             rm devicesList
            `
    ,function(data,err){
      error = err;
      if(!err){
        if(data.includes("device:vbox")){
          console.log("Emulator");
        }
        else{
        console.log("Mobile device");
        }
      }
      else{
        console.log("No device(s) connected to the system !");
      }
    });
  }
}
