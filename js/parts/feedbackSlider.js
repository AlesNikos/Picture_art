function feedbackSlider() {

	let slideIndex = 0,
		slides = document.getElementsByClassName('feedback-slider-item'),
		boxSlider = document.querySelector('.feedback-slider-box'),
		prev = document.querySelector('.main-prev-btn'),
		next = document.querySelector('.main-next-btn');

	showSlides(slideIndex);
	
	
	function autoSlider() {
		plusSlides(1);
	}

	let timeInterval = setInterval(autoSlider, 5000);

	function showSlides(n) {

		if (n > slides.length - 1) {
			slideIndex = 0;
		}
		if (n < 0) {
			slideIndex = slides.length - 1;
		}

		let boxWidth = boxSlider.clientWidth,
			offset = -slideIndex*boxWidth;

		boxSlider.setAttribute('style', `transform: translate(${offset}px)`);
	}

	
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}


	prev.addEventListener('click', function() {
		plusSlides(-1);
	});

	next.addEventListener('click', function() {
		plusSlides(1);
	});

	
}

module.exports = feedbackSlider;