app.service('MyService', function(){
  //this.a = "apa";
  this.setTheme = "w3-green";
  this.sideNav = "../templates/sideNav.html";

  this.setValEnding = function(begin, in_, out_){
        return (begin + in_) - out_;
  };
});
