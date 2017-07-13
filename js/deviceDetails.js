#!/usr/bin/env node
const cmd = require('node-cmd');
var logSymbols = require('log-symbols');
var Table = require('console.table');
var Device = require('./devices');


module.exports = function DeviceDetails(arg) {

  this.getDeviceDetails = function() {
    arg.getEmulatorUDID().then(data => {
      console.log("UDID(s) : \n");
      udidList = data.split('\n');
      for(i=0; i<udidList.length-1; i++){
        console.log("Emulator "+(i+1)+" : "+udidList[i]);
      }
      arg.getDeviceUDID().then(data => {
        udidList = data.split('\n');
        for(i=0; i<udidList.length-1; i++){
          console.log("Mobile Device "+(i+1)+" : "+udidList[i]);
        }
      arg.getEmulators().then(data => {
        console.log("\nDevice(s) : \n");
        emulatorList = data.split('\n');
        for(i=0; i<emulatorList.length-1; i++){
          console.log("Emulator");
        }
        arg.getMobileDevice().then(data => {
          deviceList = data.split('\n');
          for(i=0; i<deviceList.length-1; i++){
            console.log("Mobile Device");
          }
          })
        })
      })
    }).
    catch(err=>{
      console.log("No device(s) connected to the system !");
    })
  }
}
