window.setInterval(function() {
    let visibleImage = document.querySelector('.show');
    if (visibleImage) {
        visibleImage.className = 'photo';
    }

    let allImages = document.querySelectorAll('.photo'),
        index = getRandomImage();

    allImages[index].className = 'photo show';

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