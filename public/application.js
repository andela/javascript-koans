window.AndelaKoans = angular.module('AndelaKoans', []);

AndelaKoans.run(['$rootScope','Reporter', function($rootScope, Reporter) {
  $rootScope._ = window._;
  window.Reporter = Reporter;
}]);

AndelaKoans.factory('Refs', function() {
  var rootRef = new Firebase("https://andela-koans.firebaseio.com/");
  var username = localStorage.getItem("username");
  while(!username) {
    username = prompt('Please enter your name');
    localStorage.setItem("username", username);
  }
  var timestamp = Number(new Date);

  return {
    cohort:  rootRef.child('class-4'),
    results: rootRef.child('class-4').child(username).child('results'),
    history: rootRef.child('class-4').child(username).child('results').child(timestamp)
  };
});

AndelaKoans.factory('Reporter', ['Refs', function(Refs) {
  return {
    push: function(result, cb) {
      Refs.history.push(result, cb);
    }
  }
}]);

AndelaKoans.controller('ResultsCtrl', ['$scope','Refs', function($scope, Refs) {
  Refs.cohort.once('value', function(snap) {
    $scope.$apply(function() {
      $scope.cohort = snap.val();
    });
  });
}]);

AndelaKoans.directive('student', function() {
  return {
    restrict: 'E',
    controller: ['$scope', 'Refs', function($scope, Refs) {
      Refs.cohort.child($scope.name).child('results').orderByKey().limitToLast(1).on("child_added", function(snap) {
        console.log('results updated', snap.key(), snap.val());
        $scope.$apply(function() {
          $scope.results = snap.val();
        });
      });
    }],
    link: function(scope, element, attrs) {
    }
  };
});

AndelaKoans.directive('result', function() {
  return {
    require: '^student',
    restrict: 'E',
    controller: ['$scope', 'Refs', function($scope, Refs) {

    }],
    link: function(scope, element, attrs) {
    }
  };
});

AndelaKoans.controller('KoansCtrl', ['Refs','Reporter', function(Refs, Reporter) {
  jasmine.getEnv().addReporter(new JsKoansReporter());
  jasmine.getEnv().execute();
}]);
