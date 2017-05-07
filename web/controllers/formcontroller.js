console.log("Lets log something");
app.controller("TestFeedDisplay", ['$scope',function TestFeedDisplay($scope) {
  $scope.testfeed =   {}
  $scope.testfeed.appDir="app";
  var original = $scope.testfeed;
  $scope.reset = function() {
    console.log("clicked by reset");
    $scope.testfeed= {};
    $scope.testfeed.appDir="app";
  }
}]);
