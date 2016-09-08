app.service('MyService', function($firebase){
  //this.a = "apa";
  this.setTheme = "w3-green";
  this.sideNav = "../templates/sideNav.html";

  this.setValEnding = function(begin, in_, out_){
        return (begin + in_) - out_;
  };

  //return $firebase(new Firebase('https://studystupid-49162.firebaseio.com/accounting'));


});
