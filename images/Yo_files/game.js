//jquery easing effect plugin
jQuery.easing.easeeffectplugin = function (x, t, b, c, d) {
if ((t/=d) < (1/2.75)) {
return c*(7.5625*t*t) + b;
} else if (t < (2/2.75)) {
return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
} else if (t < (2.5/2.75)) {
return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
} else {
return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
}
};


var ball = $('#ball');
var cup1 = $('#cup1');
var cup2 = $('#cup2');
var cup3 = $('#cup3');

$(document).ready(function(){
$('#btnShow').click(function(){
// Pass easing function as a third argument
ball.animate({opacity:1, bottom: 400}, 1000, 'easeeffectplugin');
console.log("csc");
});

   $('#btnHide').click(function(){
        $("#cup1").animate({"margin-top": '50px'}, 500).animate({"margin-top": '50px'}, 800).animate({"margin-top": '0px'}, 500);

        $("#cup2").delay(1800).animate({"margin-top": '50px'}, 500).animate({"margin-top": '50px'}, 800).animate({"margin-top": '0px'}, 500);
        $(ball).delay(3000).animate({"opacity" : "0"});
  
        $("#cup3").delay(3600).animate({"margin-top": '50px'}, 500).animate({"margin-top": '50px'}, 800).animate({"margin-top": '0px'}, 500);
  
});

   $('#play').click(function(){
          $("#cup1").animate({"margin-right": '-50%'}, 500);

   });

//ball now in cup2-pick up the cup and show the ball

});


























/*$document.ready(function(){
  var ball = $("#ball");
  var random = Math.floor(Math.random()*3) + 1;
  var initialposball = 0;
  var ballimage = 

  $("#btnShow").on("click", function(event){
        event.preventDefault();
       
       
  });
});*/