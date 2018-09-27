function moreStyles() {

	let stylesBtn = document.querySelector('.button-styles'),
		styles = document.getElementsByClassName('styles-2');


		stylesBtn.addEventListener('click', function() {
			stylesBtn.style.display = 'none';
			for (let i = 0; i < styles.length; i++) {
				styles[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
				styles[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
			}
		});
		
}

module.exports = moreStyles;