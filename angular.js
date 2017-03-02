
angular.module('tabTagger', [])

.controller('tabCtrl', ['$scope', function($scope) {

  $scope.urls = [];

  $scope.addNew = function (url) {
    $scope.urls.push({ 
      title: url.title,
      url: url.url,
      //tags: url.tags
    }); 

    url.title = '';
    url.url = '';
    url.tags = [];
  };

}]);