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