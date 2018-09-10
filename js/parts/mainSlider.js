function mainSlider() {

	let slideIndex = -1,
		slides = document.getElementsByClassName('main-slider-item');
		

	showSlides();
	autoSlider();

	function autoSlider() {
		let timeInterval = setInterval(showSlides, 5000)
	}

	function showSlides() {
		
		if (slideIndex + 1 >= slides.length) {
			slideIndex = 0;
		}else {
			slideIndex++;
		}
		
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		slides[slideIndex].style.display = 'block';
	
	}

	
}

module.exports = mainSlider;