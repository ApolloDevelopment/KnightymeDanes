$(document).ready(() => {
  $('.card-div-top').on('mouseenter', function(){
    $(this).children().fadeToggle('fast');
  }).on('mouseleave', function(){
    $(this).children().fadeToggle('fast');
  });
});
