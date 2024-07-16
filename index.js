let items = document.getElementsByClassName('slider-item');

// let slider1 = document.getElementById('slider-1')
// let slider2 = document.getElementById('slider-2')
// let slider3 = document.getElementById('slider-3')

items[0].style.display = "flex"


function prevSlide() {
    // slider1.style.display = "none"
    items[0].style.display = "none"
    items[1].style.display = "flex"
}

function nextSlide() {
    items[1].style.display = "none"
    items[0].style.display = "flex"
}