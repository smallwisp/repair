var button = document.querySelector('#button'); //ищет определенный тэг
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

//addEventListener отлавливает определенное событие
button.addEventListener('click', function() {
   modal.classList.add('modal_active');
});

close.addEventListener('click', function () {
   modal.classList.remove('modal_active');
});

/* Сбром модального окна фнкцией setTimeout
function clearBox() {
   modal.classList.remove('modal_active');
}

setTimeout(clearBox, 5000); */