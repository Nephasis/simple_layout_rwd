$(document).ready(function(){
  $('.mobile-menu a').on('click', function(){
    $('.menu-list').slideToggle();
  });

$('.add-label').label();
$('.with-description').addDescription();
});
