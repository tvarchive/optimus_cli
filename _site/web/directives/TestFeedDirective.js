app.directive('TestFeed',function() {
  return {
    templateUrl: function(elem, attr) {
      return 'feeds/testfeed-' + attr.type + '.html';
    }
  }
})
