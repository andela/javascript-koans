window.AndelaKoans = angular.module('AndelaKoans', []);

AndelaKoans.run(['$rootScope','Reporter', function($rootScope, Reporter) {
  $rootScope._ = window._;
  window.Reporter = Reporter;
}]);

AndelaKoans.factory('Refs',
  function() {
    var rootRef = new Firebase("https://andela-koans.firebaseio.com/");
    var username = localStorage.getItem("username");
    while(!username) {
      username = prompt('Please enter your name');
      localStorage.setItem("username", username);
    }
    var timestamp = Number(new Date);

    // define every standard ref used in the application here
    // so that they are defined just once, not scattered throughout
    // console.log('results ref using', username, timestamp);
    return {
      root: rootRef,
      latest: rootRef.child('class-4').child(username).child('results').child('latest'),
      history: rootRef.child('class-4').child(username).child('results').child(timestamp)
    };
  }
);

AndelaKoans.factory('Reporter', ['Refs',
  function(Refs) {
    return {
      push: function(result, cb) {
        Refs.history.push(result, cb);
      }
    }
  }
]);

AndelaKoans.controller('ResultsCtrl', ['$scope','Refs', function($scope, Refs) {
  $scope.latest = function(results) {
    return _.last(_.values(results));
  }

  Refs.root.child('class-4').on('value', function(snap) {
    console.log(snap.val());
    $scope.$apply(function() { $scope.cohort = snap.val() });
  });
}]);

AndelaKoans.controller('KoansCtrl', ['Refs','Reporter', function(Refs, Reporter) {
  jasmine.getEnv().addReporter(new JsKoansReporter());
  jasmine.getEnv().execute();
}]);
