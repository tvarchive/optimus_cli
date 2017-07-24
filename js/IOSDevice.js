#!/usr/bin/env node
const cmd = require('node-cmd');
var logSymbols = require('log-symbols');
var colors = require('colors/safe');

module.exports = function IOSDevice(){
  var devices = [];
  var deviceDetails = {};
  var reason;

  this.getUDID = new Promise(
    function(resolve,reject){
      cmd.get(`
                instruments -s devices | grep "iPhone" > devicesList
                cat devicesList | grep -E -o "[a-zA-Z0-9-]{36}"
                cat devicesList | grep -E -o "[a-zA-Z0-9]{40}"
                `,
        function(data,err){
          if(data.length==0){
            cmd.run('rm devicesList');
            var reason = new Error('No iOS devices(s) found ! Please connect your device(s) properly if not connected '+
                                   'and run this command again.');
            return reject(reason);
          }
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
          cmd.get(`
                    cat devicesList | grep -E -o "(iPhone\\s[5-9a-zSE]\*\\s[A-Za-z]\*)"
                  `,
                function(data,err){
                deviceList = data.split('\n');
                for(i=0; i<deviceList.length-1; i++){
                  devices[i]["Device name"] = deviceList[i];
                  }
                  resolve(devices);
                });
            });
        }

        this.getOSVersion = function(devices){
          return new Promise(
            function(resolve,reject){
                cmd.get(`
                        cat devicesList | grep -E -o "\\([0-9]{2}\\.[0-9]{1,2}\\)|\\([0-9]{2}\\.[0-9]{1,2}\\.[0-9]{1,2}\\)"
                        rm devicesList
                        `,
                        function(data,err){
                        deviceList = data.split('\n');
                        for(i=0; i<deviceList.length-1; i++){
                          osVersion = deviceList[i].slice(1,-1);
                          devices[i]["OS Version"] = osVersion;
                          }
                          resolve(devices);
                        });
                });
        };

    this.getType = function(devices){
      return new Promise(
        function (resolve,reject){
          var emulatorPattern = new RegExp('^[a-zA-Z0-9-]{36}$');
           var devicePattern = new RegExp('^[a-zA-Z0-9]{40}$');
            for(let i=0; i<devices.length; i++){
                if(emulatorPattern.test(devices[i].udid)){
                  devices[i]["Device type"] = 'Simulator';
                }
                else if(devicePattern.test(devices[i].udid)){
                  devices[i]["Device type"] = 'Device';
                }
            }
             resolve(devices);
        });
    };

}
