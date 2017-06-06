app.service('iosHelpService', function(){
  var calendarFormat = "(Sim-only) Calendar format to set for the iOS Simulator. e.g. 'gregorian'";
  var bundleId = "Bundle ID of the app under test. Useful for starting an app on a real device or for using other caps which require the bundle ID during test startup. To run a test on a real device using the bundle ID, you may omit the 'app' capability, but you must provide 'udid'. e.g. 'io.appium.TestApp'"
  var udid= "Unique device identifier of the connected physical device. e.g.'1ae203187fc012g'"
  var launchTimeout = "Amount of time in ms to wait for instruments before assuming it hung and failing the session. e.e.g '20000'"
  var locationServicesEnabled="(Sim-only) Force location services to be either on or off. Default is to keep current sim setting. e.g. 'true'"
  var locationServicesAuthorized = "(Sim-only) Set location services to be authorized or not authorized for app via plist, so that location services alert doesn't pop up. Default is to keep current sim setting. Note that if you use this setting you MUST also use the bundleId capability to send in your app's bundle ID. e.g 'true'"
  var autoAcceptAlerts = "Accept all iOS alerts automatically if they pop up. This includes privacy access permission alerts (e.g., location, contacts, photos). Default is false. Does not work on XCUITest-based tests. e.g 'true'"
  var autoDismissAlerts = "Dismiss all iOS alerts automatically if they pop up. This includes privacy access permission alerts (e.g., location, contacts, photos). Default is false. Does not work on XCUITest-based tests.. e.g. true"
  var nativeInstrumentsLib = "Use native intruments lib (ie disable instruments-without-delay). e.g. 'true'"
  var nativeWebTap = "(Sim-only) Enable 'real', non-javascript-based web taps in Safari. Default: false. Warning: depending on viewport size/ratio this might not accurately tap an element. e.g. 'true'"
  var safariInitialUrl="(Sim-only) (>= 8.1) Initial safari url, default is a local welcome page. e.g. 'https://www.github.com'"
  var safariAllowPopups = "(Sim-only) Allow javascript to open new windows in Safari. Default keeps current sim setting. e.g.'true'"
  var safariIgnoreFraudWarning = "(Sim-only) Prevent Safari from showing a fraudulent website warning. Default keeps current sim setting. e.g. 'true'"
  var safariOpenLinksInBackground = "(Sim-only) Whether Safari should allow links to open in new windows. Default keeps current sim setting.	e.g. 'true'"
  var keepKeyChains="(Sim-only) Whether to keep keychains (Library/Keychains) when appium session is started/finished. e.g. 'true'"
  var localizableStringsDir="Where to look for localizable strings. Default en.lproj. e.g. 'en.lproj'"
  var processArguments="Arguments to pass to the AUT using instruments.e.g., -myflag"
  var interKeyDelay = "The delay, in ms, between keystrokes sent to an element when typing. e.g.'100'"
  var showIOSLog="Whether to show any logs captured from a device in the appium logs. Default false. e.g.'true'"
  var sendKeyStrategy="strategy to use to type test into a test field. Simulator default: oneByOne. Real device default: grouped. values:'oneByOne, grouped or setValue'"
  var screenshotWaitTimeout="Max timeout in sec to wait for a screenshot to be generated. default: 10 e.g. '20'"
  var waitForAppScript = "The ios automation script used to determined if the app has been launched, by default the system wait for the page source not to be empty. The result must be a boolean.e.g. true;, target.elements().length > 0;, $.delay(5000); true;"
  var webviewConnectRetries="Number of times to send connection message to remote debugger, to get webview. Default: 8. e.g. 12"
  var appName="The display name of the application under test. Used to automate backgrounding the app in iOS 9+. e.g. 'UICatalog'"
  var customSSLCert="(Sim/Emu-only) Add an SSL certificate to simulator."

  return {
    getCalendarFormat: function() {return calendarFormat},
    getBundleId: function() {return bundleId},
    getUdid: function() {return udid},
    getLaunchTimeout: function() {return launchTimeout},
    getLocationServicesEnabled: function() {return locationServicesEnabled},
    getLocationServicesAuthorized: function(){return locationServicesAuthorized},
    getAutoAcceptAlerts: function(){return autoAcceptAlerts},
    getAutoDismissAlerts:function(){return autoDismissAlerts},
    getNativeInstrumentsLib:function(){return nativeInstrumentsLib},
    getNativeWebTap:function(){return nativeWebTap},
    getSafariInitialUrl:function(){return safariInitialUrl},
    getSafariAllowPopups:function(){return safariAllowPopups},
    getSafariIgnoreFraudWarning: function(){return safariIgnoreFraudWarning},
    getSafariOpenLinksInBackground: function(){return safariOpenLinksInBackground},
    getKeepKeyChains:function(){return keepKeyChains},
    getLocalizableStringsDir: function() {return localizableStringsDir},
    getProcessArguments: function() {return processArguments},
    getInterKeyDelay: function() {return interKeyDelay},
    getShowIOSLog: function() {return showIOSLog},
    getSendKeyStrategy: function() {return sendKeyStrategy},
    getScreenshotWaitTimeout: function(){return screenshotWaitTimeout},
    getWaitForAppScript: function(){return waitForAppScript},
    getWebviewConnectRetries:function(){return webviewConnectRetries},
    getAppName:function(){return appName},
    getCustomSSLCert:function(){return customSSLCert}
  };
});
