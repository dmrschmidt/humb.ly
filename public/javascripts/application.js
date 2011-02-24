// some global variables
var maxLeft, maxTop;

/*
 * prepare the site
 */
$(document).ready(function() {
  jQuery.easing.def = "easeInOutSine";
  /*
   * Hide the input (it needs to be visual by default in case someone
   * with deactivated JS comes along).
   * Also, show the bees, since they will only be neat when they're animated.
   */
  $("#signup").hide();
  $("#bumblebees").show();
  
  // get the maximum dimensions to move to for the bees
  maxLeft = $("#bumblebees").width();
  maxTop  = $("#bumblebees").height();
  
  /*
   * let the markers show their bubble when clicked
   */
  $(".bumblebee").each(function(index, bee) {
    $(bee).css('left', $.fn.fly.getRandomMove(maxLeft));
    $(bee).css('top',  $.fn.fly.getRandomMove(maxTop));
    $(bee).fly();
    $(bee).mousedown(function() {
      $("#signup").fadeIn("fast");
    })
  });
});

/*
 * make the bumblebee flyyyyyyyy
 */
$.fn.fly = function() {
  // the maximum (linear) distance to move
  var maxDistance = 10;
  var bee = $(this);
  var currentLeft = parseInt(bee.css('left'));
  var currentTop  = parseInt(bee.css('top'));
  var moveLeft    = $.fn.fly.getRandomMove(maxDistance) * $.fn.fly.getRandomDirection();
  var moveTop     = $.fn.fly.getRandomMove(maxDistance) * $.fn.fly.getRandomDirection();
  
  var interimLeft = currentLeft + moveLeft;
  var interimTop  = currentTop  + moveTop;
  
  var newLeft     = (interimLeft > maxLeft || interimLeft < 0) ? (currentLeft - moveLeft) : interimLeft;
  var newTop      = (interimTop  > maxTop  || interimTop  < 0) ? (currentTop  - moveTop)  : interimTop;
  
  bee.animate({
    left: [newLeft, 'swing'],
    top:  [newTop, 'swing'],
  }, 100, function() {bee.fly()});
};

/*
 * get a random number
 */
$.fn.fly.getRandomMove = function(max) {
  return parseInt(Math.floor(Math.random() * max));
};

$.fn.fly.getRandomDirection = function() {
  return Math.pow(-1, parseInt(Math.floor(Math.random() * 10)));
};