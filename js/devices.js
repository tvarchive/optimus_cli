#!/usr/bin/env node
const cmd=require('node-cmd');
var logSymbols = require('log-symbols');
var Table = require('console.table');


module.exports = function Devices(){
  var error;

  this.getEmulatorUDID = function(){
    return new Promise((resolve,reject)=>{
    cmd.get(
            `adb devices -l > devicesList
             cat devicesList | grep -E -o "[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}:[0-9]{1,4}"
             rm devicesList
            `
    , function(data,err){
      if(err){
        return reject(err);
      }
      return resolve(data);
    });
  });
  return promise;
}

this.getDeviceUDID = function(){
  return new Promise((resolve,reject)=>{
    cmd.get(`adb devices -l > devices
             cat devices | grep "device usb" > devicesList
             rm devices
             cat devicesList | grep -E -o "([0-9A-Za-z]){8}\\s\\s"
             rm devicesList
            `
      , function(data,err){
        if(err){
          return reject(err);
        }
        return resolve(data);
      });
  });
  return promise;
}

this.getEmulators = function(data){
  return new Promise((resolve,reject)=>{
    cmd.get(
            `adb devices -l > devicesList
             cat devicesList | grep -E -o 'device:vbox'
             rm devicesList
            `
    ,function(data,err){
      if(err){
        return reject(err);
      }
      return resolve(data);
    });
  });
  return promise;
}

this.getMobileDevice = function(data){
  return new Promise((resolve,reject)=>{
    cmd.get(
            `adb devices -l > devicesList
             cat devicesList | grep -o 'device usb'
             rm devicesList
            `
    ,function(data,err){
      if(err){
        return reject(err);
      }
      return resolve(data);
    });
  });
  return promise;
}
}
