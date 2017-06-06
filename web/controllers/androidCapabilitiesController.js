app.controller("AndroidCapabilitiesController", ['$scope','androidHelpService', function AndroidCapabilitiesController($scope,androidHelpService) {
  $scope.androidHelpService=androidHelpService;
  $scope.helper="Choose a capability";
  $scope.androidCapabilities=[{
    'capability':'appWaitActivity',
    'value':'com.example.examplepackage.ExampleActivity'
  }];


$scope.androidCapabilityOptions=["appWaitActivity","appWaitPackage","appWaitDuration",
                                  ,"androidDeviceReadyTimeout","androidInstallTimeout",
                                  "androidInstallPath","adbPort","androidDeviceSocket","avd","avdLaunchTimeout","avdReadyTimeout",
                                  "avdArgs","useKeystore","keystorePath","keystorePassword","keyAlias","keyPassword","chromedriverExecutable",
                                  "autoWebviewTimeout","intentAction","intentCategory","intentFlags","optionalIntentArguments",
                                "dontStopAppOnReset","unicodeKeyboard","resetKeyboard","noSign","disableAndroidWatchers",
                              "chromeOptions","recreateChromeDriverSessions","nativeWebScreenshot","androidScreenshotPath","autoGrantPermissions"];

$scope.addCapability = function(androidCapabilities) {
  $scope.androidCapabilities.push({
    'capability':"",
    'value':""
  });
  $scope.PD = {};
}
$scope.removeCapability = function(androidCapability){
  var index = $scope.androidCapabilities.indexOf(androidCapability);
  $scope.androidCapabilities.splice(index, 1);
};
$scope.changeHelp = function(value) {
  console.log(value);
  switch(value) {
    case "appPackage":
    $scope.helper=androidHelpService.getAppPackage();
  break;
  case "appActivity":
  $scope.helper=androidHelpService.getAppActivity();
break;
    case "recreateChromeDriverSessions":
        $scope.helper=androidHelpService.getRecreateChromeDriverSessions();
      break;
    case "nativeWebScreenshot":
      $scope.helper = androidHelpService.getNativeWebTap();
      break;
    case "androidScreenshotPath":
      $scope.helper=androidHelpService.getAndroidScreenshotPath();
      break;
    case "autoGrantPermissions":
      $scope.helper=androidHelpService.getAutoGrantPermissions();
      break;
    case "keyAlias":
        $scope.helper=androidHelpService.getKeyAlias();
      break;
    case "keyPassword":
      $scope.helper = androidHelpService.getKeyPassword();
      break;
    case "chromedriverExecutable":
      $scope.helper=androidHelpService.getChromedriverExecutable();
      break;
    case "autoWebviewTimeout":
      $scope.helper=androidHelpService.getAutoWebviewTimeout();
      break;
    case "intentAction":
      $scope.helper=androidHelpService.getIntentAction();
      break;
    case "intentCategory":
    $scope.helper=androidHelpService.getIntentCategory();
    break;
    case "intentFlags":
    $scope.helper=androidHelpService.getIntentFlags();
    break;
    case "optionalIntentArguments":
    $scope.helper=androidHelpService.getOptionalIntentArguments();
    break;
    case "dontStopAppOnReset":
    $scope.helper=androidHelpService.getDontStopAppOnReset();
    break;
    case "unicodeKeyboard":
    $scope.helper=androidHelpService.getUnicodeKeyboard();
    break;
    case "resetKeyboard":
    $scope.helper=androidHelpService.getResetKeyboard();
    break;
    case "noSign":
    $scope.helper=androidHelpService.getNoSign();
    break;
    case "disableAndroidWatchers":
    $scope.helper=androidHelpService.getDisableAndroidWatchers();
    break;
    case "chromeOptions":
    $scope.helper=androidHelpService.getChromeOptions();
    break;
    case "appWaitActivity":
        $scope.helper=androidHelpService.getAppWaitActivity();
      break;
    case "appWaitPackage":
      $scope.helper = androidHelpService.getAppWaitPackage();
      break;
    case "deviceReadyTimeout":
      $scope.helper=androidHelpService.getDeviceReadyTimeout();
      break;
    case "androidInstallTimeout":
      $scope.helper=androidHelpService.getAndroidInstallTimeout();
      break;
    case "androidInstallPath":
      $scope.helper=androidHelpService.getAndroidInstallPath();
      break;
    case "adbPort":
    $scope.helper=androidHelpService.getAdbPort();
    break;
    case "androidDeviceSocket":
    $scope.helper=androidHelpService.getAndroidDeviceSocket();
    break;
    case "avd":
    $scope.helper=androidHelpService.getAvd();
    break;
    case "avdLaunchTimeout":
    $scope.helper=androidHelpService.getAvdLaunchTimeout();
    break;
    case "avdReadyTimeout":
    $scope.helper=androidHelpService.getAvdReadyTimeout();
    break;
    case "avdArgs":
    $scope.helper=androidHelpService.getAvdArgs();
    break;
    case "useKeystore":
    $scope.helper=androidHelpService.getKeystore();
    break;
    case "keystorePath":
    $scope.helper=androidHelpService.getKeystorePath();
    break;
    case "keystorePassword":
    $scope.helper=androidHelpService.getKeystorePassword();
    break;

  }
}
}]).directive('androidHelp',function() {
  return {
    restrict:'E',
    scope: {
      capability:'=title'
    },
    templateUrl:'feeds/androidHelp.html',

  }
});
