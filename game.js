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
console.log("Ball in glass 2....Ready to rumble");
});

var initialposball = 2;
var x =0;
var i = 0;
   $('#btnHide').click(function(){
        $("#cup1").animate({"margin-top": '50px'}, 500).animate({"margin-top": '50px'}, 800).animate({"margin-top": '0px'}, 500);

        $("#cup2").delay(1800).animate({"margin-top": '50px'}, 500).animate({"margin-top": '50px'}, 800).animate({"margin-top": '0px'}, 500);
        $(ball).delay(3000).animate({"opacity" : "0"});
  
        $("#cup3").delay(3600).animate({"margin-top": '50px'}, 500).animate({"margin-top": '50px'}, 800).animate({"margin-top": '0px'}, 500);
  
});

   $("#play1").click(function play() {
        
var left = [1, 3, 1, 3, 2, 3, 3, 1, 3, 1, 3, 1, 3, 1, 2, 3, 1, 3, 3, 1, 3];
var right = [3, 1, 3, 2, 3, 2, 1, 3, 1, 3, 1, 3, 1, 3, 3, 1, 3, 2, 1, 3, 1];    
     
      
        $("#cup-o-"+left[i]).swap({  
            target: "cup-o-"+right[i], // Mandatory. The ID of the element we want to swap with  
            opacity: "0.8", // Optional. If set will give the swapping elements a translucent effect while in motion  
             speed: 150// Optional. The time taken in milliseconds for the animation to occur    
        });

       

var parent1 = $("#cup-o-"+left).parent().attr('id');
        var num1 = parseInt(parent1.charAt(3));

var parent2 = $("#cup-o-"+right).parent().attr('id');
        var num2 = parseInt(parent2.charAt(3));
   
      var parent_all = $("#cup-o-2").attr('left');
      console.log(parent_all);
         var timer = setTimeout(function() { play() },450);

         if(i==21){
              clearInterval(timer);
              alert("Which of the cup do you think has the ball...Click on the glass");
         }

 i++;
x=1;
       });

  
 $("#cup-o-2").on("click", function(){
  if(x==1){
    alert("Mr Arpit says u won....");
  }
});

$("#cup-o-1").on("click", function(){
  if(x==1){
    alert("Mr Arpit says u Fucked up....");
  }
});

$("#cup-o-3").on("click", function(){
  if(x==1){
    alert("Mr Arpit says u Fucked up....");
  }
});




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