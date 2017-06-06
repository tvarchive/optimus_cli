app.controller("TestFeedDisplay", ['$scope','optimusHelpService',function TestFeedDisplay($scope,optimusHelpService) {
  $scope.testfeed =   {};
  $scope.testfeedTwo =   {};
  $scope.testfeedThree =   {};
  $scope.testfeedFour =   {};
  $scope.testfeedFive =   {};
  $scope.showOrHideTF1="hide";
  $scope.optimusHelpService = optimusHelpService;
  $scope.caps={};
  $scope.testfeedTwo.caps =   {};
  $scope.testfeedThree.caps =   {};
  $scope.testfeedFour.caps =   {};
  $scope.testfeedFive.caps =   {};
  $scope.appiumCaps={};
  $scope.testfeedTwo.appiumCaps={};
  $scope.testfeedThree.appiumCaps={};
  $scope.testfeedFour.appiumCaps={};
  $scope.testfeedFive.appiumCaps={};
  $scope.testfeed.appDir="app";
  $scope.testfeedTwo.appDir="app";
  $scope.testfeedThree.appDir="app";
  $scope.testfeedFour.appDir="app";
  $scope.testfeedFive.appDir="app";
  $scope.belongsToHelp = optimusHelpService.getBelongsTo();
  $scope.runsOnHelp = optimusHelpService.getRunsOn();
  $scope.appDirHelp = optimusHelpService.getAppDir();
  $scope.appNameHelp = optimusHelpService.getAppName();
  $scope.appPackageHelp="appPackage";
  $scope.appActivityHelp="appActivity";
  var original = $scope.testfeed;
  $scope.count=1;
  $scope.dummy = function() {
    console.log("dummy");
  }
  $scope.reset = function() {
    $scope.testfeed= {};
    $scope.testfeed.appDir="app";
    $scope.testfeedTwo= {};
    $scope.testfeedTwo.appDir="app";
    $scope.testfeedThree= {};
    $scope.testfeedThree.appDir="app";
    $scope.testfeedFour= {};
    $scope.testfeedFour.appDir="app";
    $scope.testfeedFive= {};
    $scope.testfeedFive.appDir="app";
    $scope.caps={};
    $scope.testfeedTwo.caps =   {};
    $scope.testfeedThree.caps =   {};
    $scope.testfeedFour.caps =   {};
    $scope.testfeedFive.caps =   {};
    $scope.appiumCaps={};
    $scope.testfeedTwo.appiumCaps={};
    $scope.testfeedThree.appiumCaps={};
    $scope.testfeedFour.appiumCaps={};
    $scope.testfeedFive.appiumCaps={};
  }
  $scope.addNewTestFeed = function() {
      $scope.count++;
      switch ($scope.count) {
        case 2:
        $scope.openTFTwo();
          break;
        case 3:
        $scope.openTFThree();
        break;
        case 4:
        $scope.openTFFour();
        break;
        case 5:
        $scope.openTFFive();
        break;
        default:
        $scope.maxTestFeedsReached=true;

      }
  }
  $scope.tfOne=true;
  $scope.tfTwo=false;
  $scope.tfThree=false;
  $scope.tfFour=false;
  $scope.tfFive=false;

  $scope.openTFOne = function() {
    $scope.tfOne=true;
    $scope.tfTwo=false;
    $scope.tfThree=false;
    $scope.tfFour=false;
    $scope.tfFive=false;
  };

  $scope.toogleTFOne = function() {
    if($scope.tfOne) {
      $scope.showOrHideTF1="show";
    } else {
      $scope.showOrHideTF1="hide";
    }
    $scope.tfOne=!$scope.tfOne;
  };

  $scope.openTFTwo = function() {
    $scope.showOrHideTF1 ="show";
    $scope.showOrHideTF2 ="hide";
    $scope.showOrHideTF3 ="show";
    $scope.showOrHideTF4 ="show";
    $scope.showOrHideTF5 ="show";
    $scope.testfeed2added=true;
    $scope.testFeed2Header=true;
    $scope.tfOne=false;
    $scope.tfTwo=true;
    $scope.tfThree=false;
    $scope.tfFour=false;
    $scope.tfFive=false;
  };


  $scope.toogleTFTwo = function() {
    if($scope.tfTwo) {
      $scope.showOrHideTF2="show";
    } else {
      $scope.showOrHideTF2="hide";
    }
    $scope.tfTwo=!$scope.tfTwo;
  };

  $scope.removeTFTwo = function() {
    $scope.count=1;
    $scope.testfeed2added=false;
    $scope.testFeed2Header=false;
    $scope.maxTestFeedsReached=false;
    $scope.tfOne=true;
    $scope.tfTwo=false;
    $scope.tfThree=false;
    $scope.tfFour=false;
    $scope.tfFive=false;
  };

  $scope.openTFThree = function() {
    $scope.showOrHideTF1 ="show";
    $scope.showOrHideTF2 ="show";
    $scope.showOrHideTF3 ="hide";
    $scope.showOrHideTF4 ="show";
    $scope.showOrHideTF5 ="show";
    $scope.testfeed3added=true;
    $scope.testFeed3Header=true;
    $scope.tfOne=false;
    $scope.tfTwo=false;
    $scope.tfThree=true;
    $scope.tfFour=false;
    $scope.tfFive=false;
  };

  $scope.toogleTFThree = function() {
    if($scope.tfThree) {
      $scope.showOrHideTF3="show";
    } else {
      $scope.showOrHideTF3="hide";
    }
    $scope.tfThree=!$scope.tfThree;
  };

  $scope.removeTFThree = function() {
    $scope.count=2;
    $scope.testfeed3added=false;
    $scope.testFeed3Header=false;
    $scope.maxTestFeedsReached=false;
    $scope.tfOne=true;
    $scope.tfTwo=false;
    $scope.tfThree=false;
    $scope.tfFour=false;
    $scope.tfFive=false;
  };

  $scope.openTFFour = function() {
    $scope.showOrHideTF1 ="show";
    $scope.showOrHideTF2 ="show";
    $scope.showOrHideTF3 ="show";
    $scope.showOrHideTF4 ="hide";
    $scope.showOrHideTF5 ="show";
    $scope.testfeed4added=true;
    $scope.testFeed4Header=true;
    $scope.tfOne=false;
    $scope.tfTwo=false;
    $scope.tfThree=false;
    $scope.tfFour=true;
    $scope.tfFive=false;
  };

  $scope.toogleTFFour = function() {
    if($scope.tfFour) {
      $scope.showOrHideTF4="show";
    } else {
      $scope.showOrHideTF4="hide";
    }
    $scope.tfFour=!$scope.tfFour;
  };

  $scope.removeTFFour = function() {
    $scope.count=3;
    $scope.testfeed4added=false;
    $scope.testFeed4Header=false;
    $scope.maxTestFeedsReached=false;
    $scope.tfOne=true;
    $scope.tfTwo=false;
    $scope.tfThree=false;
    $scope.tfFour=false;
    $scope.tfFive=false;
  };

  $scope.openTFFive = function() {
    $scope.showOrHideTF1 ="show";
    $scope.showOrHideTF2 ="show";
    $scope.showOrHideTF3 ="show";
    $scope.showOrHideTF4 ="show";
    $scope.showOrHideTF5 ="hide";
    $scope.testfeed5added=true;
    $scope.testFeed5Header=true;
    $scope.tfOne=false;
    $scope.tfTwo=false;
    $scope.tfThree=false;
    $scope.tfFour=false;
    $scope.tfFive=true;
  };

  $scope.toogleTFFive = function() {
    if($scope.tfFive) {
      $scope.showOrHideTF5="show";
    } else {
      $scope.showOrHideTF5="hide";
    }
    $scope.tfFive=!$scope.tfFive;
  };

  $scope.removeTFFive = function() {
    $scope.count=4;
    $scope.testfeed5added=false;
    $scope.testFeed5Header=false;
    $scope.maxTestFeedsReached=false;
    $scope.tfOne=true;
    $scope.tfTwo=false;
    $scope.tfThree=false;
    $scope.tfFour=false;
    $scope.tfFive=false;
  };

}])
.directive('testFeed',function() {
  return {
    templateUrl: function(elem, attr) {
      return 'feeds/testfeed-' + attr.type + '.html';
    }
  }
}).directive('feedDisplay',function() {
  return {
    templateUrl: function(elem, attr) {
      return 'feeds/testfeeddisplay-' + attr.type + '.html';
    }
  }
}).directive('optimusHelp',function() {
  return {
    restrict:'E',
    templateUrl:'feeds/optimushelp.html',
    scope: {
      title:'='
    }

  }
});
