app.controller("AppiumCapabilitiesController", ['$scope',function AppiumCapabilitiesController($scope) {
  $scope.appiumCapabilities=[{
    'capability':'automationName',
    'value':'com.example.examplepackage.ExampleActivity'
  }];
  $scope.appiumCapabilityOptions=["automationName","platformVersion","deviceName","browserName","newCommandTimeout",
                                  "language","locale","udid","orientation",
                                  "autoWebview","noReset","fullReset","eventTimings","enablePerformanceLogging"];


$scope.addCapability = function(appiumCapabilities) {
  $scope.appiumCapabilities.push({
    'capability':"",
    'value':""
  });
  $scope.PD = {};
}
}]);
