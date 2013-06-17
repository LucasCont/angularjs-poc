// controllers

baseApp.controller("DemoController", function($scope) {
  $scope.message = "Hey!! I'm from dependency module";
});

demoApp.controller("TestController", ['$scope', '$http', '$timeout', function(scope, http, timeout) {
    scope.github_url = "https://api.github.com/repos/cogn/damp/commits";

    scope.getRecentCommits = function() { 
      http.get(scope.github_url)
      .success(function(data, status, headers, config){
        scope.commits = data; 
      }); 
    };

    

    timeout(function() { scope.getRecentCommits(); }, scope.refreshInterval * 1000);
}]);



// demoApp.controller("TestController", ['$scope', '$http', function (h, s) {
//   s.github_url = "https://api.github.com/repos/cogn/damp/commits";
//   h.get(s.github_url)
//     .success(function(data){
//       s.commits = data; 
//     });
// }]);