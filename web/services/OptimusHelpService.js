app.service('optimusHelpService', function(){
  var belongsTo = "Binds the appium driver to an app. Eg: Driver or Rider";
  var runsOn = "Any: Runs on all devices for a particular platform. Eg: Android(Devices+Emulators), IOS(Devices+Simulators). Emulators: Runs on all running android emulators. Simulators: Runs on all IOS Simulators. Device:Runs on android device if platform is android, else on ios device."
  var appDir= "Folder name, where the app(.apk, .ipa or .app) is stored. Provide a relative path if you have save android and ios apps in seperate folders. Eg: app/android or app/ios"
  var appName = "Name of application under test. Eg: HelloOptimus.apk(Android), HelloOptimus.app(IOS Simulators) or HelloOptimus.ipa(ios devices)"
  return {
    getBelongsTo: function() {return belongsTo},
    getRunsOn: function() {return runsOn},
    getAppDir: function() {return appDir;},
    getAppName: function() {return appName},
  };
});
