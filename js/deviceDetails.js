#!/usr/bin/env node
const cmd = require('node-cmd');
var logSymbols = require('log-symbols');
var Table = require('console.table');


module.exports = function DeviceDetails(arg) {
var emulatorUDIDs,deviceUDIDs;
  this.getDeviceDetails = function() {
    arg.getEmulatorUDID().then(data => {
      emulatorUdidList = data.split('\n');
      console.log("Emulator UDID(s) : \n");
      for(i=0; i<emulatorUdidList.length-1; i++){
        console.log("Emulator "+(i+1)+" : "+emulatorUdidList[i]);
      }

      console.log("\nEmulator OS Version(s) : \n");
      for(i=0; i<emulatorUdidList.length-1; i++){
      cmd.get(`adb -s `+ emulatorUdidList[i]+` shell getprop ro.build.version.release

              `,function(data,err){
                if(err){
                  console.error("No device(s) connected to the system !");
                }
                console.log("Emulator "+(i)+" : "+data);
              });
      }

      arg.getDeviceUDID().then(data => {
        deviceUdidList = data.split('\n');
        console.log("\nDevice UDID(s) : ");
        for(i=0; i<deviceUdidList.length-1; i++){
          console.log("Mobile Device "+(i)+" : "+deviceUdidList[i]);
        }

        console.log("\nDevice OS Version(s) : \n");
        for(i=0; i<deviceUdidList.length-1; i++){
        cmd.get(`adb -s `+ deviceUdidList[i]+` shell getprop ro.build.version.release

                `,function(data,err){
                  if(err){
                    console.error("No device(s) connected to the system !");
                  }
                  console.log("Device "+(i+1)+" : "+data);
                });
        }

      arg.getEmulators().then(data => {
        emulatorList = data.split('\n');
        console.log("\nDevice(s) : \n");
        for(i=0; i<emulatorList.length-1; i++){
          console.log("Emulator");
        }
        arg.getMobileDevices().then(data => {
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
