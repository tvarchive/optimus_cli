app.controller("AppiumCapabilitiesController", ['$scope','appiumHelpService',function AppiumCapabilitiesController($scope,appiumHelpService) {
  $scope.appiumHelpService=appiumHelpService;
  $scope.helper="Choose a capability";
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
  $scope.helper="choose a capability"
  $scope.PD = {};
};

$scope.removeCapability = function(appiumCapability){
  var index = $scope.appiumCapabilities.indexOf(appiumCapability);
  $scope.appiumCapabilities.splice(index, 1);
};

$scope.getHelp = function() {
    console.log("capability");
};

$scope.changeHelp = function(value) {
  switch(value) {
    case "automationName":
        $scope.helper=appiumHelpService.getAutomationName();
      break;
    case "platformVersion":
      $scope.helper = appiumHelpService.getPlatformVersion();
      break;
    case "deviceName":
      $scope.helper=appiumHelpService.getDeviceName();
      break;
    case "browserName":
      $scope.helper=appiumHelpService.getBrowserName();
      break;
    case "newCommandTimeout":
      $scope.helper=appiumHelpService.getNewCommandTimeout();
      break;
    case "language":
    $scope.helper=appiumHelpService.getLanguage();
    break;
    case "locale":
    $scope.helper=appiumHelpService.getLocale();
    break;
    case "udid":
    $scope.helper=appiumHelpService.getUDID();
    break;
    case "orientation":
    $scope.helper=appiumHelpService.getOrientation();
    break;
    case "autoWebview":
    $scope.helper=appiumHelpService.getAutoWebView();
    break;
    case "noReset":
    $scope.helper=appiumHelpService.getNoReset();
    break;
    case "fullReset":
    $scope.helper=appiumHelpService.getFullReset();
    break;
    case "eventTimings":
    $scope.helper=appiumHelpService.getEventTimings();
    break;
    case "enablePerformanceLogging":
    $scope.helper=appiumHelpService.getEnablePerformanceLogging();
    break;

  }
}
}]).directive('appiumHelp',function() {
  return {
    restrict:'E',
    scope: {
      capability:'=title'
    },
    templateUrl:'feeds/appiumhelp.html',

  }
});
