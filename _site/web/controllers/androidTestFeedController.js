app.controller("AndroidTestFeedController", ['$scope','androidTestFeedService',function AndroidTestFeedController($scope,androidTestFeedService) {
 $scope.androidTestFeedService = androidTestFeedService;
  $scope.androidTestfeed =
    {
      "test":"androidTestFeedService.getBelongsTo()"
        // "executionDetails": {
        //   "appium_js_path": "/usr/local/bin/appium",
        //   "appium_node_path": "/usr/local/bin/node"
        // },
        // "testFeed":[
        //   {
        //     "belongsTo": $scope.$watch(function(){
        //       return androidTestFeedService.getBelongsTo();
        //     },function(newValue){
        //       return newValue;
        //     },true)
        //   }
        // ]
       };
}]);
