'use strict'

var slides = document.querySelectorAll('.tariff__list'),
	currentSlide = 0,
	//slideInterval = setInterval(nextSlide,4000),
	//playing = true,
	activeButton = document.getElementById('active'),
	next = document.getElementById('next'),
	previous = document.getElementById('previous');

function nextSlide() {
 goToSlide(currentSlide+1);
}

function previousSlide() {
 goToSlide(currentSlide-1);
}
