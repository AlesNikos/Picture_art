(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/feedbackSlider.js":4,"../parts/mainSlider.js":5,"../parts/modalConsultation.js":6,"../parts/modalDesign.js":7,"../parts/modalGift.js":8}],2:[function(require,module,exports){
function ajax () {

	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Успешно"; //сюда сделать оповещение
	message.failure = "Что-то пошло не так";

	let form = document.getElementsByClassName('form')[0],
		input = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

	function sendForm(elem) {
		elem.addEventListener('submit', function(e) {
			e.preventDefault();
			elem.appendChild(statusMessage);

			let request = new XMLHttpRequest();
			request.open("POST", 'server.php');

			request.setAttribute("Content-Type", "application/x-www-form-urlencoded");

			let formData = new FormData(elem);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState == 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
					} else {
						statusMessage.innerHTML = message.failure;
					}
				}
			};
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		});
	}
	sendForm(form);
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc() {

	let size = document.getElementById('size'),
		material = document.getElementById('material'),
		options = document.getElementById('options'),
		promocode = document.querySelector('.promocode'),
		calcPrice = document.getElementsByClassName('calc-price')[0],
		total = 0;


	size.addEventListener('change', checkCalc);
	material.addEventListener('change', checkCalc);
	options.addEventListener('change', checkCalc);
	promocode.addEventListener('change', promo);


	function checkCalc() {
		total = Math.round(size.value * material.value * options.value)
		if (size.value == '' || material.value == '') {
			calcPrice.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
		} else if (promocode.value == "IWANTPOPART") {
			calcPrice.innerHTML = (total * 70) / 100;
		} else {
			calcPrice.innerHTML = total;
		}		
	}
	

	function promo() {
		if (promocode.value != "IWANTPOPART") {
			calcPrice.innerHTML = total;
		} else {
			calcPrice.innerHTML = calcPrice.innerHTML * 0.7;
		}
	}
}

module.exports = calc;
},{}],4:[function(require,module,exports){
function feedbackSlider() {

	let slideIndex = 1,
		slides = document.getElementsByClassName('feedback-slider-item'),
		prev = document.querySelector('.main-prev-btn'),
		next = document.querySelector('.main-next-btn');

	showSlides(slideIndex);
	autoSlider();
	
	function autoSlider() {
		let timeInterval = setInterval(showSlides, 5000)
	}

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		slides[slideIndex - 1].style.display = 'block';
	}

	
	function plusSliders(n) {
		showSlides(slideIndex += n);
	}


	prev.addEventListener('click', function() {
		plusSliders(-1);
	});

	next.addEventListener('click', function() {
		plusSliders(1);
	});

	
}

module.exports = feedbackSlider;
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
function modalConsultation() {

	//Модальное окно при нажатии на кнопки "Подробнее об услуге"

	let popupConsultation = document.querySelector('.popup-consultation'),
		close = document.getElementsByClassName('popup-close');

	document.body.addEventListener('click', event => {
		let target = event.target;
		if (!event.target.classList.contains('button-consultation')) return;
		
		openModalConsultation();
	});

	close[0].addEventListener('click', closeModalConsultation);

	popupConsultation.addEventListener('click', outsideClickConsultation);

	//Функция открывания модального
	function openModalConsultation() {
		popupConsultation.style.display = "block";
	}

	//Функция закрывания модального окна при нажатии на крестик
	function closeModalConsultation() {
		popupConsultation.style.display = "none";
	}

	//Функция закрывания модального окна при нажатии вне его
	function outsideClickConsultation(event) {
		if (event.target == popupConsultation) {
			popupConsultation.style.display = "none";
		}
	}
}

module.exports = modalConsultation;
},{}],7:[function(require,module,exports){
function modalDesign() {

	//Модальное окно при нажатии на кнопки "Заказать", "Заказать портрет", "Заказать дизайн проекта", "Хочу так же"

	let popupDesign = document.querySelector('.popup-design'),
		close = document.getElementsByClassName('popup-close');


	document.body.addEventListener('click', event => {
		let target = event.target;
		if (!event.target.classList.contains('button-design')) return;
		
		openModalDesign();
	});

	close[2].addEventListener('click', closeModal);

	popupDesign.addEventListener('click', outsideClick);

	//Функция открывания модального
	function openModalDesign() {
		popupDesign.style.display = "block";
	}

	//Функция закрывания модального окна при нажатии на крестик
	function closeModal() {
		popupDesign.style.display = "none";
	}

	//Функция закрывания модального окна при нажатии вне его
	function outsideClick(event) {
		if (event.target == popupDesign) {
			popupDesign.style.display = "none";
		}
	}
}

module.exports = modalDesign;
},{}],8:[function(require,module,exports){
function modalGift() {

	// Модальное окно при нажатии на подарок

	let fixedGift = document.querySelector('.fixed-gift'),
		popupGift = document.querySelector('.popup-gift'),
		close = document.getElementsByClassName('popup-close');

	fixedGift.addEventListener('click', openModalGift);

	close[1].addEventListener('click', closeModal);

	popupGift.addEventListener('click', outsideClick);

	//Функция открывания модального и исчезновение подарка
	function openModalGift() {
		popupGift.style.display = "block";
		fixedGift.style.display = "none";
	}

	//Функция закрывания модального окна при нажатии на крестик
	function closeModal() {
		popupGift.style.display = "none";
	}

	//Функция закрывания модального окна при нажатии вне его
	function outsideClick(event) {
		if (event.target == popupGift) {
			popupGift.style.display = "none";
		}
	}
}

module.exports = modalGift;
},{}]},{},[1]);
