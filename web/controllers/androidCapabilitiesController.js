app.controller("AndroidCapabilitiesController", ['$scope',function AndroidCapabilitiesController($scope) {
  $scope.testword = "hello";
  $scope.androidCapabilities=[{
    'capability':'appWaitActivity',
    'value':'com.example.examplepackage.ExampleActivity'
  }];
  $scope.androidCapabilityOptions=["appWaitActivity","appWaitPackage","appWaitDuration",
                                  "deviceReadyTimeout","androidCoverage","androidDeviceReadyTimeout","androidInstallTimeout",
                                  "androidInstallPath","adbPort","androidDeviceSocket","avd","avdLaunchTimeout","avdReadyTimeout",
                                  "avdArgs","useKeystore","keystorePath","keystorePassword","keyAlias","keyPassword","chromedriverExecutable",
                                  "autoWebviewTimeout","intentAction","intentCategory","intentFlags","optionalIntentArguments",
                                "dontStopAppOnReset","unicodeKeyboard","resetKeyboard","noSign","ignoreUnimportantViews","disableAndroidWatchers",
                              "chromeOptions","recreateChromeDriverSessions","nativeWebScreenshot","androidScreenshotPath","autoGrantPermissions"];


$scope.addCapability = function(androidCapabilities) {
  $scope.androidCapabilities.push({
    'capability':"",
    'value':""
  });
  $scope.PD = {};
}
}]);
