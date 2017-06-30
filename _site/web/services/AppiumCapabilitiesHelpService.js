app.service('appiumHelpService', function(){
  var automationName = "Which automation engine to use. e.g. Appium (default) or Selendroid";
  var platformVersion = "Mobile OS version. e.g.7.1, 4.4"
  var deviceName= "The kind of mobile device or emulator to use. e.g. iPhone Simulator, iPad Simulator, iPhone Retina 4-inch, Android Emulator, Galaxy S4, etc.... On iOS, this should be one of the valid devices returned by instruments with instruments -s devices. On Android this capability is currently ignored, though it remains required."
  var browserName = "Name of mobile web browser to automate. Should be an empty string if automating an app instead. e.g. 'Safari' for iOS and 'Chrome', 'Chromium', or 'Browser' for Android"
  var newCommandTimeout="How long (in seconds) Appium will wait for a new command from the client before assuming the client quit and ending the session. e.g. 60"
  var language = "(Sim/Emu-only) Language to set for the simulator / emulator. e.g.'fr'"
  var locale = "(Sim/Emu-only) Locale to set for the simulator / emulator. e.g. 'fr_CA'"
  var udid = "Unique device identifier of the connected physical device. e.g. '1ae203187fc012g'"
  var orientation = "(Sim/Emu-only) start in a certain orientation. e.g. 'LANDSCAPE' or  'PORTRAIT'"
  var autoWebView = "Move directly into Webview context. Default false. e.g. true"
  var noReset="Don't reset app state before this session. e.g. true"
  var fullReset = "Perform a complete reset. e.g. true"
  var eventTimings = "Enable or disable the reporting of the timings for various Appium-internal events (e.g., the start and end of each command, etc.). Defaults to false. To enable, use true. The timings are then reported as events property on response to querying the current session. e.g.true"
  var enablePerformanceLogging = "(Web and webview only) Enable Chromedriver's (on Android) or Safari's (on iOS) performance logging (default false) e.g. true"
  return {
    getAutomationName: function() {return automationName},
    getPlatformVersion: function() {return platformVersion},
    getDeviceName: function() {return deviceName},
    getBrowserName: function() {return browserName},
    getNewCommandTimeout: function() {return newCommandTimeout},
    getLanguage: function(){return language},
    getLocale: function(){return locale},
    getUDID:function(){return udid},
    getOrientation:function(){return orientation},
    getAutoWebView:function(){return autoWebView},
    getNoReset:function(){return noReset},
    getFullReset:function(){return fullReset},
    getEventTimings: function(){return eventTimings},
    getEnablePerformanceLogging: function(){return enablePerformanceLogging}
  };
});
