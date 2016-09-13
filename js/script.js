
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

 var $menuTrigger = $('.menu');
 var $overlay = $('.nav-overlay');
 var $close = $('a.close');
 var $nav = $('.navigation-container .navigation ul');
 var $body = $('body');

 $menuTrigger.on('click touchstart', function(e){
 	e.preventDefault();
 	$overlay.removeClass('hide');
 	$close.removeClass('hide');
 	$nav.addClass('show');
 	$body.addClass('no-scroll');
 });

  $close.on('click touchstart', function(e){
  	e.preventDefault();
 	$overlay.addClass('hide');
 	$close.addClass('hide');
 	$nav.removeClass('show');
 	$body.removeClass('no-scroll');
 });

});
