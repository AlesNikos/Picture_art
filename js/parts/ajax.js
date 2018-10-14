function ajax () {

	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Успешно"; //сюда сделать оповещение
	message.failure = "Что-то пошло не так";

	let form = document.getElementsByTagName('form')[0],
		mainForm = document.getElementsByClassName('main-form'),
		input = document.getElementsByTagName('input'),
		textarea = document.getElementsByTagName('textarea'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

	document.body.addEventListener('click', event => {
		let target = event.target;
		if (!event.target.classList.contains('main-form')) return;
		
		sendForm(mainForm);
	});

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
	// sendForm(form);
}

module.exports = ajax;