app.controller("TestFeedDisplay", ['$scope',function TestFeedDisplay($scope) {
  $scope.testfeed =   {};
  $scope.caps={};
  $scope.appiumCaps={};
  $scope.testfeed.appDir="app";
  var original = $scope.testfeed;
  $scope.reset = function() {
    $scope.testfeed= {};
    $scope.testfeed.appDir="app";
  }
}]);
