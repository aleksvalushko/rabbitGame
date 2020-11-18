window.setInterval(function() {
    let visibleImage = document.querySelector('.show');
    if (visibleImage) {
        visibleImage.className = 'photo';
    }

    let allImages = document.querySelectorAll('.photo'),
        index = getRandomImage();

    allImages[index].className = 'photo show';

    /*allImages[index].addEventListener('click', () => {
        let audio = document.querySelector('audio');
        audio.currentTime = 0;
        audio.play();

        let counter = document.querySelector('.counter');
        debugger
        counter.innerHTML = +counter.innerHTML + 1;
    })*/

    allImages[index].onclick = function() {
        let audio = document.querySelector('audio');
        audio.currentTime = 0;
        audio.play();

        let counter = document.querySelector('.counter');
        counter.innerHTML = +counter.innerHTML + 1;
    }

}, 1000);

let getRandomImage = () => {
    return Math.floor(Math.random() * 9);
};

/*window.setInterval(function () {
    var visibleImage = document.querySelector(".show");
    if (visibleImage) {
        visibleImage.className = "photo";
    }

    // найти все картинки
    var allImages = document.querySelectorAll(".photo");
    // получаем случайный порядковый номер картинки
    var index = getRandomImageIndex();
    // показываем картинку по случайному индексу, вернув класс show
    allImages[index].className = "photo show";
    // случайной картинке присобачиваем обработчик события: картинка, когда по тебе
    // кликнут, вызови нашу функцию
    allImages[index].onclick = function () {
        // без точки ищем по названию тега
        var audio = document.querySelector("audio");
        // перемотать трек в начало перед проигрыванием
        audio.currentTime = 0;
        // даём команду плееру - играй
        audio.play();

        var counter = document.querySelector(".counter");
        // +counter.innerHTML - это преобразование строки в число
        counter.innerHTML = +counter.innerHTML + 1;
        //counter.innerHTML = Number(counter.innerHTML) + 1;
    }

}, 1000);

// функция, которую если вызвать, вернёт нам случайное число от 0 до 8
function getRandomImageIndex() {
    return Math.floor(Math.random() * 9);
}*/