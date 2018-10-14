function gamburger () {

	let menuBtn = document.querySelector('.burger'),
		burgerMenu = document.querySelector('.burger-menu');


		window.addEventListener('resize', function() {
			let width = window.innerWidth;

			if (width <= 768) {
				menuBtn.addEventListener('click', function() {
					burgerMenu.style.display = 'block';
				});
			} //else {
			// 	burgerMenu.style.display = 'none';
			// }

			if (width > 768) {
				burgerMenu.style.display = 'none';
			}
		});


}

module.exports = gamburger;