$(document).ready(function () {
   // Обработка и отправка формы через AJAX 
   $('#offer__form').on('submit', function (event) {
      event.preventDefault();//отмена отправки формы
      $.ajax({
         url: 'mail.php',
         type: 'POST',
         data: $(this).serialize(), //выводит введенные данные в виде строки
         success: function (data) {
            $('.success').html(data['username'] + ', Ваша форма отправлена!');
            console.log(data);
         }
         
      });
   });
});
