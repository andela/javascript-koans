window.AndelaKoans = angular.module('AndelaKoans', []);

AndelaKoans.run(['$rootScope','Reporter', function($rootScope, Reporter) {
  $rootScope._ = window._;
  window.Reporter = Reporter;
}]);

AndelaKoans.factory('Refs', function() {
  var rootRef = new Firebase("https://test-andela-koans.firebaseio.com/");
  var username = localStorage.getItem("username");
  while(!username) {
    username = prompt('Please enter your name');
    localStorage.setItem("username", username);
  }

  return {
    cohort:  rootRef.child('class-4'),
    students: rootRef.child('class-4').child('students'),
    history: rootRef.child('class-4').child('results'),
    currentUser: rootRef.child('class-4').child('students').child(username)
  };
});

AndelaKoans.factory('Reporter', ['Refs', function(Refs) {
  var username = localStorage.getItem("username");
  var timestamp = Number(new Date());
  return {
    push: function(result, cb) {
      Refs.history.child(username).child(timestamp).push(result, cb);
      Refs.currentUser.set(timestamp, cb);
    }
  };
}]);

AndelaKoans.controller('ResultsCtrl', ['$scope','Refs', function($scope, Refs) {
  Refs.students.on('value', function(snap) {
    $scope.$apply(function() {
      $scope.students = snap.val();
    });
  });
}]);

AndelaKoans.directive('student', function() {
  return {
    restrict: 'E',
    controller: ['$scope', 'Refs', function($scope, Refs) {

      Refs.students.child($scope.name).on("value", function(snap) {
        Refs.history.child($scope.name).child(snap.val()).on("value", function(resultSnap) {
          console.log('results updated', resultSnap.key(), Object.keys(resultSnap.val()).length);
          $scope.$apply(function() {
            $scope.results = resultSnap.val();
          });
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
