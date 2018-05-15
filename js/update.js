'use strict'
var updateNotifier = require('update-notifier');
// const pkg = require('../package.json');

module.exports = function Update() {
  this.updateOptimus = function() {
    const notifier = updateNotifier({
      pkg: {
		name: 'optimus-cli',
		version: '1.4.6'
  },
  updateCheckInterval: 0
    });
  if(notifier.update) {
    notifier.notify();
  }
  }
}
