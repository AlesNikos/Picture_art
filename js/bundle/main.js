window.addEventListener('DOMContentLoaded', function() {

	let modalGift = require('../parts/modalGift.js'),
		modalConsultation = require('../parts/modalConsultation.js'),
		modalDesign = require('../parts/modalDesign.js'),
		mainSlider = require('../parts/mainSlider.js'),
		calc = require('../parts/calc.js'),
		feedbackSlider = require('../parts/feedbackSlider.js'),
		ajax = require('../parts/ajax.js');



	modalGift();	//сделал и исправил замечания
	modalConsultation(); //сделал и исправил замечания
	modalDesign(); //сделал и исправил замечания
	mainSlider(); //не работает анимация
	calc(); //осталось доделать промокод
	feedbackSlider(); //не работает анимация
	ajax();






});