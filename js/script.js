$(document).ready(function(){

  // Quando si passa con il mouse sopra i menu la scritta si colora di nero
  $('.dropdown').hover(function(){
    $(this).children('.dropdown-menu').toggleClass('active');
    $(this).children('a').css('color', 'black');
  });
  // Quando si toglie il mouse sopra i menu la scritta si colora di grigio
  $(".dropdown").mouseleave(function() {
    $(this).children('a').css('color', 'grey');
  });

  // Ogni singolo elemento del menu si colora di rosso quando ci si passa con il mouse.
  $('.menu-interno').mouseenter(function(){
    $(this).children('a').css('color', 'red');
  });

  // Ogni singolo elemento del menu si colora di grigio quando ci si allontana con il mouse.
  $(".menu-interno").mouseleave(function() {
    $(this).children('a').css('color', 'grey');
  });

});
