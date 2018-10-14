window.addEventListener('DOMContentLoaded', function() {

	let modalGift = require('../parts/modalGift.js'),
		modalConsultation = require('../parts/modalConsultation.js'),
		modalDesign = require('../parts/modalDesign.js'),
		mainSlider = require('../parts/mainSlider.js'),
		calc = require('../parts/calc.js'),
		feedbackSlider = require('../parts/feedbackSlider.js'),
		ajax = require('../parts/ajax.js'),
		moreStyles = require('../parts/moreStyles.js'),
		sortPortfolio = require('../parts/sortPortfolio.js'),
		picHover = require('../parts/picHover.js'),
		accordion = require('../parts/accordion.js'),
		gamburger = require('../parts/gamburger.js');



	modalGift();	//сделал и исправил замечания
	modalConsultation(); //сделал и исправил замечания
	modalDesign(); //сделал и исправил замечания
	mainSlider(); //сделал
	calc(); //сделал
	feedbackSlider(); //сделал
	ajax();
	moreStyles(); //сделал
	sortPortfolio(); //сделал
	picHover(); //не работает на мобильных утсройствах
	accordion(); //сделал
	gamburger();






});