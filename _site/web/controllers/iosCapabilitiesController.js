app.controller("IOSCapabilitiesController", ['$scope','iosHelpService',function IOSCapabilitiesController($scope,iosHelpService) {
$scope.iosHelpService=iosHelpService;
$scope.helper="Choose a capability";
  $scope.iosCapabilities=[{
    'capability':'calendarFormat',
    'value':'com.example.examplepackage.ExampleActivity'
  }];
  $scope.iosCapabilityOptions=["calendarFormat","bundleId","launchTimeout",
                                  "locationServicesEnabled","locationServicesAuthorized","autoAcceptAlerts","autoDismissAlerts",
                                  "nativeInstrumentsLib","nativeWebTap","safariInitialUrl","safariAllowPopups","safariIgnoreFraudWarning","safariOpenLinksInBackground",
                                  "keepKeyChains","localizableStringsDir","processArguments","interKeyDelay","showIOSLog","sendKeyStrategy","screenshotWaitTimeout",
                                  "waitForAppScript","webviewConnectRetries","appName","customSSLCert"];


$scope.addCapability = function(iosCapabilities) {
  $scope.iosCapabilities.push({
    'capability':"",
    'value':""
  });
  $scope.PD = {};
}
$scope.removeCapability = function(iosCapability){
  var index = $scope.iosCapabilities.indexOf(iosCapability);
  $scope.iosCapabilities.splice(index, 1);
};

$scope.changeHelp = function(value) {
  switch(value) {
    case "appPackage":
    $scope.helper=iosHelpService.getBundleId();
    break;
    case "keepKeyChains":
    $scope.helper=iosHelpService.getKeepKeyChains();
    break;
    case "localizableStringsDir":
    $scope.helper=iosHelpService.getLocalizableStringsDir();
    break;
    case "processArguments":
    $scope.helper=iosHelpService.getProcessArguments();
    break;
    case "interKeyDelay":
    $scope.helper=iosHelpService.getInterKeyDelay();
    break;
    case "showIOSLog":
    $scope.helper=iosHelpService.getShowIOSLog();
    break;
    case "sendKeyStrategy":
        $scope.helper=iosHelpService.getSendKeyStrategy();
      break;
    case "screenshotWaitTimeout":
      $scope.helper = iosHelpService.getScreenshotWaitTimeout();
      break;
    case "waitForAppScript":
      $scope.helper=iosHelpService.getWaitForAppScript();
      break;
    case "webviewConnectRetries":
      $scope.helper=iosHelpService.getWebviewConnectRetries();
      break;
    case "appName":
      $scope.helper=iosHelpService.getAppName();
      break;
    case "customSSLCert":
    $scope.helper=iosHelpService.getCustomSSLCert();
    break;
    case "calendarFormat":
        $scope.helper=iosHelpService.getCalendarFormat();
      break;
    case "bundleId":
      $scope.helper = iosHelpService.getBundleId();
      break;
    case "launchTimeout":
      $scope.helper=iosHelpService.getLaunchTimeout();
      break;
    case "locationServicesEnabled":
      $scope.helper=iosHelpService.getLocationServicesEnabled();
      break;
    case "locationServicesAuthorized":
        $scope.helper=iosHelpService.getLocationServicesAuthorized();
      break;
    case "autoAcceptAlerts":
      $scope.helper = iosHelpService.getAutoAcceptAlerts();
      break;
    case "autoDismissAlerts":
      $scope.helper=iosHelpService.getAutoDismissAlerts();
      break;
    case "nativeInstrumentsLib":
      $scope.helper=iosHelpService.getNativeInstrumentsLib();
      break;
    case "nativeWebTap":
      $scope.helper=iosHelpService.getNativeWebTap();
      break;
    case "safariInitialUrl":
    $scope.helper=iosHelpService.getSafariInitialUrl();
    break;
    case "safariAllowPopups":
    $scope.helper=iosHelpService.getSafariAllowPopups();
    break;
    case "safariIgnoreFraudWarning":
    $scope.helper=iosHelpService.getSafariIgnoreFraudWarning();
    break;
    case "safariOpenLinksInBackground":
    $scope.helper=iosHelpService.getSafariOpenLinksInBackground();
    break;
  }
}
}]).directive('iosHelp',function() {
  return {
    restrict:'E',
    scope: {
      capability:'=title'
    },
    templateUrl:'feeds/iosHelp.html',

  }
});
