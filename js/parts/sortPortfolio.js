function sortPortfolio() {

	let portfolioMenu = document.querySelector('.portfolio-menu'),
		linkItem = portfolioMenu.getElementsByTagName('li'),
		portfolioNo = document.querySelector('.portfolio-no'),
		portfolioBlock = document.getElementsByClassName('portfolio-block');

	portfolioMenu.addEventListener('click', function(event) {
		let target = event.target.className;
		console.log(target);

		for (let i = 0; i < linkItem.length; i++) {

			if (linkItem[i].classList.contains(target)) {
				linkItem[i].classList.add('active');

			  	for (let j=0; j<portfolioBlock.length; j++) {

				  	if (portfolioBlock[j].classList.contains(target)) {
				    	portfolioBlock[j].style.display = 'block';

				    } else if (target == 'grandmother' || target == 'granddad') {
						portfolioNo.style.display = 'block';
						portfolioBlock[j].style.display = 'none';

					}	else {
				    	portfolioBlock[j].style.display = 'none';
				    	portfolioNo.style.display = 'none';
				    }
				}

			} else {
				if (target.match(/\bactive\b/)) {
					break;
				} else {
					linkItem[i].classList.remove('active');
				}
					
			}
		}
	});
}

module.exports = sortPortfolio;