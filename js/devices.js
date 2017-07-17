#!/usr/bin/env node
const cmd = require('node-cmd');
var logSymbols = require('log-symbols');

module.exports = function Devices(){
  var devices = [];
  var deviceDetails= {};

  this.getUDID = new Promise(
    function(resolve,reject) {
      cmd.get(
              `
               adb devices -l > devicesList
               cat devicesList | grep -E -o "[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}:[0-9]{1,4}"
               cat devicesList | grep -E -o "([a-zA-Z0-9]){7,8}\\s\\s"
              `
      , function(data,err){
        if(data.length==0 || err){
          var reason = new Error('No devices(s) found ! Please connect your device(s) properly if not connected.');
          return reject(reason);
        }
        console.log("\n"+logSymbols.info+" List of devices connected to the system are : \n");
        deviceList = data.split('\n');
        for(i=0; i<deviceList.length-1; i++){
             deviceDetails = {
              udid: deviceList[i]
             };
          devices.push(deviceDetails);
        }
        resolve(devices);
      });
  });

  this.getDeviceName = function(devices){
    return new Promise(
      function (resolve,reject){
        cmd.get(
                `
                 cat devicesList | grep -E -o "model:[a-zA-Z0-9_]+"
                 rm devicesList
                `
                ,function(data){
                  deviceList = data.split('\n');
                  for(i=0; i<deviceList.length-1; i++){
                      devices[i]["Device name"] = deviceList[i].split(":")[1];
                  }
                  resolve(devices);
                });
          });
  };

  this.getType = function(devices){
    return new Promise(
      function (resolve,reject){
        var emulatorPattern = new RegExp('^([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}:[0-9]{1,4})$');
         var devicePattern = new RegExp('^([a-zA-Z0-9]){7,15}\\s\\s$');
          for(let i=0; i<devices.length; i++){
              if(emulatorPattern.test(devices[i].udid)){
                devices[i]["Device type"] = 'Emulator';
              }
              else if(devicePattern.test(devices[i].udid)){
                devices[i]["Device type"] = 'Device';
              }
          }
           resolve(devices);
      });
  };

  this.getOSVersion = function(devices){
    return new Promise(
      function (resolve,reject){
        var devicesProcessed = 0;
         devices.forEach(function(device){
          cmd.get(`adb -s `+ device.udid +` shell getprop ro.build.version.release`,
              function(data){
                devicesProcessed++;
                version = data.split('\n')[0].split('\r')[0];
                device["OS version"] = "Android "+version;
                if(devicesProcessed==devices.length){
                  resolve(devices);
                }
            });
          });
        });
      };
}
