
$(document).on('ready', function() {  

 $(document).on('scroll',function(){
  var $menu = $('.navigation-container');

     if ($(document).scrollTop() > 66) {
     $menu.addClass('fixed')
     } else {
    $menu.removeClass('fixed')
     }
  });
 // fixed menu
});
