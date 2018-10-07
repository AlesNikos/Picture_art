function accordion() {

	let accordion = document.getElementById('accordion'),
		accordionHead = document.querySelectorAll('.accordion-heading'),
		accordHeadSpan = document.querySelectorAll('.accordion-heading > span'),
		accordionBlock = document.querySelectorAll('.accordion-block');


	accordion.addEventListener('click', function (e) {
		let target = e.target;

		if (target.tagName == 'SPAN') {
			for (let i = 0; i < accordionHead.length; i++) {
				hideAccord(i);

				if (target == accordHeadSpan[i]) {
					showAccord(i);
					// break;
				}
			}
		}
	});

	function showAccord(a) {
		accordionBlock[a].style.display = 'block';
		accordionBlock[a].classList.add('ui-accordion-content-active');
		accordionHead[a].classList.add('ui-accordion-header-active');
		
	}

	function hideAccord(b) {
		for (let i = b; i < accordionBlock.length; i++) {
			accordionBlock[i].style.display = 'none';
			accordionBlock[i].classList.remove('ui-accordion-content-active');
			accordionHead[i].classList.remove('ui-accordion-header-active');
		}
	}
}

module.exports = accordion;