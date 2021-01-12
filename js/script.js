$(document).ready(function(){

  $('.dropdown').hover(function(){
    $(this).children('.dropdown-menu').toggleClass('active');
    $(this).children('a').css('color', 'black');
  });

  $(".dropdown").mouseleave(function() {
    $(this).children('a').css('color', 'grey');
  });
});
