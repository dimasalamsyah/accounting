

app.controller("homeCtrl", function($scope, MyService, $location) {
  $scope.header = "Login";
  $scope.footer = "&copyDimas Alamsyah";
  $scope.setTheme = MyService.setTheme;
  //$scope.items = sideMenu;
  var sideMenu = [
      {menu: 'Accounting', link: 'templates/accounting.html'},
      {menu: 'About', link: 'templates/about.html'},
      {menu: 'Logout', link: 'templates/logout.html'}
  ];
});
app.controller("loginCtrl", function($scope, MyService, $location) {
  $scope.header = "Login";
  $scope.footer = "&copyDimas Alamsyah";
  $scope.setTheme = MyService.setTheme;

  $scope.login = function(user){
    if(user.username=="dimas" && user.password=="dimas12"){
      $location.path("/home");
      console.log("login succses");
    }else{
      console.log("login failed");
    }
    //console.log(user.username);
  }

});
app.controller("headerCtrl", function($scope, MyService) {

});
