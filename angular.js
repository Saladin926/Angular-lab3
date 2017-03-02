
angular.module('tabTagger', [])

.controller('tabCtrl', ['$scope', function($scope) {

  $scope.urls = [];
  $scope.tags = [{name:"YouTube",color:"red"},{name:"Google Search",color:"cornflowerblue"}];

  $scope.addNew = function (url) {
    $scope.urls.push({ 
      title: url.title,
      url: url.url,
      tags: url.tags
    }); 

    url.title = '';
    url.url = '';
    url.tags = [];
  };

  $scope.addNewTag = function (tag) {
    $scope.tags.push({ 
      name: tag.name,
      color: tag.color
    }); 

    tag.name = '';
    tag.color = '#ff0000';
  };

}]);