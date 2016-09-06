

app.controller("homeCtrl", function($scope, MyService, $location) {
  $scope.header = "Login";
  $scope.footer = "&copyDimas Alamsyah";
  $scope.setTheme = MyService.setTheme;
  $scope.sideNav = MyService.sideNav;
  //$scope.items = sideMenu;


  //$scope.getSideMenu = $scope.sideMenu[0];


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

app.controller("accountingCtrl", function($scope, MyService, account) {
  $scope.header = "Accounting";
  $scope.footer = "&copy Dimas Alamsyah";
  $scope.setTheme = MyService.setTheme;

  $scope.today = new Date();

  //$scope.startAt = "today | date :  'dd/MM/y HH:mm:ss'";
// var setbegin = $scope.accounting.begin;
// var setin_ = $scope.accounting.in_;
// var setout = $scope.accounting.out;
// var setEnding = (setbegin + setin_) - setout;
// $scope.addItem = function(params) {
//   alert(params.name);
//   alert(params.qty);
// };
var getValue;
$scope.calEnding = function(begin, in_, out_){
 var getValue = $scope.outValEnding = MyService.setValEnding(begin, in_, out_);
 // $scope.accounting = {
 //   ending:  getValue
 // }
}

$scope.accounting = {
    begin: 0,
    in_: 0,
    out: 0,
    ending: getValue,
    startAt: getDete,
    updateAt: getDete
 };
   //$scope.outValEnding = 0;



  //$scope.ending = $scope.accounting.masuk + $scope.accounting.out;

  $scope.submit = function(accounting){
    account.create(accounting);
    console.log($scope.accounting.ending);
    console.log(accounting);
    //console.log(day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour +':'+ minute);
  }

});

app.controller("aboutCtrl", function($scope, MyService) {

});

app.controller("indexCtrl", function($scope, MyService, account) {
  $scope.setTheme = MyService.setTheme;

  $scope.sideMenu = [
      {menu: 'Login', link: 'login'},
      {menu: 'Accounting', link: 'accounting'},
      {menu: 'About', link: 'about'},
      {menu: 'Logout', link: 'logout'}
  ];



});

app.factory('account', ['$firebase',
  function($firebase) {
    var ref = new Firebase(firebaseUrl);
    var accounting = $firebase(ref.child('accounting')).$asArray();

    var account = {
      all: accounting,
      create: function (message) {
        return accounting.$add(message);
      },
      get: function (messageId) {
        return $firebase(ref.child('accounting').child(messageId)).$asObject();

      },
      delete: function (message) {
        return accounting.$remove(account);
      }
    };

    return account;


  }
  ]);
