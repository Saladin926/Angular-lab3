
angular.module('tabTagger', [])

.controller('tabCtrl', ['$scope','$window', function($scope,$window) {

  $scope.urls = [];
  $scope.tags = [{name:"YouTube",color:"red"},{name:"Google Search",color:"cornflowerblue"}];
  $scope.filterTags = [];
  $scope.addNew = function (url) {
    if(!url.title || !url.url)
    {
      $window.alert("Make Sure You Have A Title And URL");
      return;
    }
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
    if(!tag.name)
    {
      $window.alert("Make Sure You Have A Name");
      return;
    }
    $scope.tags.push({ 
      name: tag.name,
      color: tag.color
    }); 

    tag.name = '';
    tag.color = '#ff0000';
  };

  $scope.openAll = function(){
    angular.forEach($scope.urls,function(url){
      $window.open(url.url,"_blank");
    });
  };

  $scope.tagFilter = function(url){
    if($scope.filterTags.length <= 0){
      return true;
    }
    var include = false;
    angular.forEach($scope.filterTags,function(tag){
      if(url.tags.indexOf(tag) !== -1)
      {
        include = true;
      }
    });
    return include;
  };
}]);

