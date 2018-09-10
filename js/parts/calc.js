function calc() {

	let size = document.getElementById('size'),
		material = document.getElementById('material'),
		options = document.getElementById('options'),
		promocode = document.querySelector('.promocode'),
		calcPrice = document.getElementsByClassName('calc-price')[0],
		total = 0;


	size.addEventListener('change', function() {
		total = +size.value * +material.value;
		if (size.value == '' || material.value == '') {
			calcPrice.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
		} else if (options.value != '' && material.value != '') {
			calcPrice.innerHTML = total * +options.value;
		} else {
			calcPrice.innerHTML = total;
		}

		// promo();
		// if (promocode.value == "IWANTPOPART") {
		// 	calcPrice.innerHTML = (total * 70) / 100;
		// }
	});

	material.addEventListener('change', function() {
		total = +size.value * +material.value;
		if (size.value == '' || material.value == '') {
			calcPrice.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
		} else if (options.value != '' && size.value != '') {
			calcPrice.innerHTML = total * +options.value;
		} else {
			calcPrice.innerHTML = total;
		}

		// promo();
	});

	options.addEventListener('change', function() {
		total = +size.value * +material.value;
		if (size.value == '' || material.value == '') {
			calcPrice.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
		} else if (size.value != '' && material.value != '' && options.value != '') {
			let a = total;
			calcPrice.innerHTML = a * this.options[this.selectedIndex].value;
		} else {
			calcPrice.innerHTML = total;
		}

		
	});

	// promocode.addEventListener('change', promo);

	// function promo() {
	// 	if (promocode.value == "IWANTPOPART") {
	// 		calcPrice.innerHTML = (total * 70) / 100;
	// 	}
	// }
}

module.exports = calc;