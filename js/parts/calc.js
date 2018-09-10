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
		if (promocode.value == "IWANTPOPART") {
			calcPrice.innerHTML = calcPrice.innerHTML * 0.7;
		}
	}
}

module.exports = calc;