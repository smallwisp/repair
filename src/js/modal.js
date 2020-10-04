$(document).ready(function(){
   var button = $('#button');
   var modal = $('#modal');
   var close = $('#close');
   var amountScrolled = 200;//для кнопки вверх
   button.on('click', function() {
      modal.addClass('modal_active');
      
   });

   close.on('click', function () {
      modal.removeClass('modal_active');
   });
// для кнопки вверх
//    $(window).scroll(function () {
//       if ($(window).scrollTop() > amountScrolled) {
//          $('a.back-to-top').fadeIn('slow');
//       } else {
//          $('a.back-to-top').fadeOut('slow');
//       }
//    });
//    $('a.back-to-top').click(function () {
//       $('html, body').animate({
//          scrollTop: 0
//       }, 700);
//       return false;
//    });
});