function modalGift() {

	// Модальное окно при нажатии на подарок

	let fixedGift = document.querySelector('.fixed-gift'),
		popupGift = document.querySelector('.popup-gift'),
		close = document.getElementsByClassName('popup-close'),
		buttonAll = document.getElementsByTagName('button'),
		isClicker = false;

	fixedGift.addEventListener('click', openModalGift);

	close[1].addEventListener('click', closeModal);

	popupGift.addEventListener('click', outsideClick);

	document.body.addEventListener('click', event => {
		let target = event.target;
		if (!event.target.classList.contains('button')) return;
		
		isClick();
	});

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
	//Функция запускается при нажатии на любую кнопку
	function isClick() {
		isClicker = true;
	}

	//Функция открывания модульного окна при пролистывание до конца страницы
	window.onscroll = function() {
		// размер скролла
  let scrolled = window.pageYOffset || document.documentElement.scrollTop,
  	// высота окна
	  	heightWindow = window.innerHeight || document.documentElement.clientHeight,
  	// высота всего документа
 	  heightDocument = document.body.clientHeight;

		if ( scrolled + heightWindow >= heightDocument && isClicker == false) {
			popupGift.style.display = "block";
			fixedGift.style.display = "none";
		}
	};	
}

module.exports = modalGift;