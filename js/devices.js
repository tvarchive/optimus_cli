#!/usr/bin/env node
const cmd=require('node-cmd');
var logSymbols = require('log-symbols');
var Table = require('console.table');


module.exports = function Devices(){
  var error;

  this.getUDID = function(){
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
}

//^([a-zA-Z0-9_-]){8}$
this.getDeviceType = function(){
  return new Promise((resolve,reject)=>{
    cmd.get(
            `adb devices -l > devicesList
             cat devicesList | grep -o 'device:vbox'
             rm devicesList
            `
    ,function(data,err){
      if(err){
        return reject(err);
      }
      return resolve(data);
    });
  });
}
}
