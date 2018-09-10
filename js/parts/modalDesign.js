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