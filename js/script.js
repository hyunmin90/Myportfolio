


$('.fade').slick({
  infinite:true,
  slidesToShow:3,
  cssEase: 'linear',
});    
    
$(function() {
  $(document).foundation();
});


clickedScroll= function(id){
  $('html, body').animate({
    scrollTop: $("#"+id).offset().top
  }, 2000); 
};
