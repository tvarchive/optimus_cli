app.service('androidHelpService', function(){
  var appActivity = "Activity name for the Android activity you want to launch from your package. This often needs to be preceded by a . (e.g., .MainActivity instead of MainActivity)";
  var appPackage = "Java package of the Android app you want to run. e.g. 'com.example.android.myApp'"
  var appWaitActivity= "Activity name/names, comma separated, for the Android activity you want to wait for. e.g.'SplashActivity, SplashActivity,OtherActivity, *, *.SplashActivity'"
  var appWaitPackage = "Java package of the Android app you want to wait for. e.g. 'com.example.android.myApp, com.android.settings'"
  var appWaitDuration="appWaitDuration	Timeout in milliseconds used to wait for the appWaitActivity to launch (default 20000). e.g.'30000'"
  var deviceReadyTimeout = "Timeout in seconds while waiting for device to become ready. e.g.'5'"
  var androidInstallTimeout = "Timeout in milliseconds used to wait for an apk to install to the device. Defaults to 90000. e.g.'90000'"
  var androidInstallPath = "The name of the directory on the device in which the apk will be push before install. Defaults to /data/local/tmp. e.g.'/sdcard/Downloads/'"
  var adbPort = "Port used to connect to the ADB server (default 5037), e.g. '5037'"
  var androidDeviceSocket = "Devtools socket name. Needed only when tested app is a Chromium embedding browser. The socket is open by the browser and Chromedriver connects to it as a devtools client. e.g.'chrome_devtools_remote'"
  var avd="Name of avd to launch. e.g.'api19'"
  var avdLaunchTimeout = "How long to wait in milliseconds for an avd to launch and connect to ADB (default 120000). e.g. '300000'"
  var avdReadyTimeout = "How long to wait in milliseconds for an avd to finish its boot animations (default 120000). e.g. '300000'"
  var avdArgs = "Additional emulator arguments used when launching an avd. e.g. '-netfast'"
  var useKeystore="Use a custom keystore to sign apks, default false. e.g.'true'"
  var keystorePath="	Path to custom keystore, default ~/.android/debug.keystore. e.g. '/path/to.keystore'"
  var keystorePassword="Password for custom keystore. e.g.'foo'"
  var keyAlias = "Alias for key. e.g.'androiddebugkey'"
  var keyPassword="Password for key. e.g. 'foo'"
  var chromedriverExecutable="The absolute local path to webdriver executable (if Chromium embedder provides its own webdriver, it should be used instead of original chromedriver bundled with Appium). e.g. '/abs/path/to/webdriver'"
  var autoWebviewTimeout="Amount of time to wait for Webview context to become active, in ms. Defaults to 2000. e.g. '4'"
  var intentAction = "Intent action which will be used to start activity (default android.intent.action.MAIN). e.g. 'android.intent.action.MAIN, android.intent.action.VIEW'"
  var intentCategory="Intent category which will be used to start activity (default android.intent.category.LAUNCHER). e.g.'android.intent.category.LAUNCHER, android.intent.category.APP_CONTACTS'"
  var intentFlags="	Flags that will be used to start activity (default 0x10200000). e.g. '0x10200000'"
  var optionalIntentArguments="Additional intent arguments that will be used to start activity. e.g. '--esn <EXTRA_KEY>, --ez <EXTRA_KEY> <EXTRA_BOOLEAN_VALUE>'"
  var dontStopAppOnReset="Doesn't stop the process of the app under test, before starting the app using adb. If the app under test is created by another anchor app, setting this false, allows the process of the anchor app to be still alive, during the start of the test app using adb. In other words, with dontStopAppOnReset set to true, we will not include the -S flag in the adb shell am start call. With this capability omitted or set to false, we include the -S flag. Default false. e.g. 'true'"
  var unicodeKeyboard="Enable Unicode input, default false. e.g. 'true'"
  var resetKeyboard="Reset keyboard to its original state, after running Unicode tests with unicodeKeyboard capability. Ignored if used alone. Default false. e.g. 'true'"
  var noSign = "Skip checking and signing of app with debug keys, will work only with UiAutomator and not with selendroid, default false. e.g. true"
  var ignoreUnimportantViews="Calls the setCompressedLayoutHierarchy() uiautomator function. This capability can speed up test execution, since Accessibility commands will run faster ignoring some elements. The ignored elements will not be findable, which is why this capability has also been implemented as a toggle-able setting as well as a capability. Defaults to false. e.g. 'true'"
  var disableAndroidWatchers = "Disables android watchers that watch for application not responding and application crash, this will reduce cpu usage on android device/emulator. This capability will work only with UiAutomator and not with selendroid, default false. e.g. 'true'"
  var chromeOptions="Allows passing chromeOptions capability for ChromeDriver. e.g 'chromeOptions: {args: ['--disable-popup-blocking']}'"
  var recreateChromeDriverSessions="Kill ChromeDriver session when moving to a non-ChromeDriver webview. Defaults to false. e.g. 'true'"
  var nativeWebScreenshot="In a web context, use native (adb) method for taking a screenshot, rather than proxying to ChromeDriver. Defaults to false. e.g. 'true'"
  var androidScreenshotPath="The name of the directory on the device in which the screenshot will be put. Defaults to /data/local/tmp. e.g. '/sdcard/screenshots/'"
  var autoGrantPermissions="Have Appium automatically determine which permissions your app requires and grant them to the app on install. Defaults to false. e.g 'true'"

  return {
    getAppActivity: function() {return appActivity},
    getAppPackage: function() {return appPackage},
    getAppWaitActivity: function() {return appWaitActivity},
    getAppWaitPackage: function() {return appWaitPackage},
    getAppWaitDuration: function() {return appWaitDuration},
    getDeviceReadyTimeout: function(){return deviceReadyTimeout},
    getAndroidInstallTimeout: function(){return androidInstallTimeout},
    getAndroidInstallPath:function(){return androidInstallPath},
    getAdbPort:function(){return adbPort},
    getAndroidDeviceSocket:function(){return androidDeviceSocket},
    getAvd:function(){return avd},
    getAvdLaunchTimeout:function(){return avdLaunchTimeout},
    getAvdReadyTimeout: function(){return avdReadyTimeout},
    getAvdArgs: function(){return avdArgs},
    getKeystore:function(){return useKeystore},
    getKeystorePath: function() {return keystorePath},
    getKeystorePassword: function() {return keystorePassword},
    getKeyAlias: function() {return keyAlias},
    getKeyPassword: function() {return keyPassword},
    getChromedriverExecutable: function() {return chromedriverExecutable},
    getAutoWebviewTimeout: function(){return autoWebviewTimeout},
    getIntentAction: function(){return intentAction},
    getIntentCategory:function(){return intentCategory},
    getIntentFlags:function(){return intentFlags},
    getOptionalIntentArguments:function(){return optionalIntentArguments},
    getDontStopAppOnReset:function(){return dontStopAppOnReset},
    getUnicodeKeyboard:function(){return unicodeKeyboard},
    getResetKeyboard: function(){return resetKeyboard},
    getNoSign: function(){return noSign},
    getIgnoreUnimportantViews:function(){return ignoreUnimportantViews},
    getDisableAndroidWatchers: function() {return disableAndroidWatchers},
    getChromeOptions: function() {return chromeOptions},
    getRecreateChromeDriverSessions: function() {return recreateChromeDriverSessions},
    getNativeWebScreenshot: function() {return nativeWebScreenshot},
    getAndroidScreenshotPath: function() {return androidScreenshotPath},
    getAutoGrantPermissions: function(){return autoGrantPermissions}
  };
});
