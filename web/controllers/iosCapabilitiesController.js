app.controller("IOSCapabilitiesController", ['$scope',function IOSCapabilitiesController($scope) {
  $scope.iosCapabilities=[{
    'capability':'appPackage',
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
}]);
