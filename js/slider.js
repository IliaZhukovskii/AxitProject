$('.slider2').slick({
    speed: 700,
    slidesToShow: 1,
    arrows:false,
    asNavFor:'.slider1',
    draggable:true
   
  });
  $('.slider1').slick({
    slidesToShow: 3,
    asNavFor:'.slider2',
    focusOnSelect:true,
    vertical:true
  });





$( ".hamburger" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
});
});