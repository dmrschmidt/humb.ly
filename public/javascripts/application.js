// some global variables
var maxLeft, maxTop;

/*
 * prepare the site
 */
$(document).ready(function() {
  // let our bees fly a bit smoother
  jQuery.easing.def = "easeInOutSine";
  /*
   * Hide the input (it needs to be visual by default in case someone
   * with deactivated JS comes along).
   * Also, show the bees, since they will only be neat when they're animated.
   */
  $("#new_signup").hide();
  $("#bumblebees").show();
  
  // get the maximum dimensions to move to for the bees
  maxLeft = $("#bumblebees").width();
  maxTop  = $("#bumblebees").height();
  
  /*
   * let the markers show their bubble when clicked
   */
  $(".bumblebee").each(function(index, bee) {
    // spread the beeeees!!!
    $(bee).css('left', $.fn.fly.getRandomMove(maxLeft));
    $(bee).css('top',  $.fn.fly.getRandomMove(maxTop));
    // and then let them fly
    $(bee).fly();
    // and if they get caught... display the signup page
    $(bee).mousedown(function() { $("#new_signup").fadeIn("fast"); });
  });
  
  /*
   * register our submit logic
   */
  $("#new_signup").submit(function(event) {
    $("#current_step span").hide();
    $("#signup_mail").hide('fast');
    $("#spinner").show('fast');
  });
  $("#submitter").click(function(event) {
    event.preventDefault();
    if($("#signup_mail").val()) {
      $("#new_signup").submit();
    } else {
      $("#signup_mail").focus();
    }
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
  // bee-escape-detection pre calculations
  var interimLeft = currentLeft + moveLeft;
  var interimTop  = currentTop  + moveTop;
  // make sure the bees don't leave their beautiful flowers too far
  var newLeft     = (interimLeft > maxLeft || interimLeft < 0) ? (currentLeft - moveLeft) : interimLeft;
  var newTop      = (interimTop  > maxTop  || interimTop  < 0) ? (currentTop  - moveTop)  : interimTop;
  // let the bees fleeeeee... erm... I mean fly :)
  bee.animate({
    left: newLeft,
    top:  newTop,
  }, 100, function() {bee.fly()});
};

/*
 * get a random number
 */
$.fn.fly.getRandomMove = function(max) {
  return parseInt(Math.floor(Math.random() * max));
};

/*
 * randomly return a value of 1 or -1
 */
$.fn.fly.getRandomDirection = function() {
  return Math.pow(-1, parseInt(Math.floor(Math.random() * 10)));
};