// directives

demoApp.directive("enter", function() {
  return function (scsd, x, attr) {
    return x.bind("mouseenter", function() {
      console.log("welcome!. ");
    });
  };
});

demoApp.directive("leave", function(){
  return function (scope, element)  {
    return element.bind("mouseleave", function() {
      console.log("Bye bye!. ");
    });
  };
});

demoApp.directive("over", function(){
  return function (scope, element)  {
    return element.bind("mousemove", function() {
      console.log("over over!. ");
    });
  };
});