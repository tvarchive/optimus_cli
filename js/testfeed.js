var express = require('express');
const open = require('opn');
var path = require('path');
const bodyParser = require('body-parser');

module.exports = function TestFeed(name) {
  var app = express();
  app.set('view engine', 'ejs');
  app.listen(3000);
  this.launchTestfeed  = function() {
    open("http://localhost:3000/testfeed");
  }
  app.get("/testfeed",function(req,res) {
    res.render('pages/testfeed', {
       tfname:name.testfeed_name
    });

    app.post('/add/testfeed',function(req,res) {
      console.log(req.body.appType);
    })
  });
}
