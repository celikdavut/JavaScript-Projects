const gallery = document.querySelector('.gallery');

function moveSlide(e) {
    const slides = document.querySelectorAll('.slide');
    e.target.matches('.next') && gallery.append(slides[0])
    e.target.matches('.prev') && gallery.prepend(slides[slides.length - 1]);
}

document.addEventListener('click', moveSlide, false);