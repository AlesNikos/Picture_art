function picHover() {

	//Показ картинок при наведении мышью и при нажатии на мобильных утройствах

	let sizeWrapper = document.querySelector('.sizes-wrapper'),
		img = sizeWrapper.getElementsByTagName('img'),
		imgHover = [
				"sizes-1-1", 
				"sizes-2-1",
				"sizes-3-1",
				"sizes-4-1"
			],
		imgDefault = [
						"sizes-1",
						"sizes-2",
						"sizes-3",
						"sizes-4"
			];

	if (isTouchDevice() === true) {	

  sizeWrapper.addEventListener('mouseenter', function(event) {
      
  	let target = event.target;
  	event.preventDefault();

  	// if (target.tagName != 'IMG') return;

  	let childContainer = target.parentNode.querySelector('.sizes-wrapper');
  	if (target.tagName != 'IMG') return;

  	for (let i = 0; i < img.length; i++) {
    	if (target == img[i]) {
		    showPic(i);
		    break;
     }
    }  


  	// if (event.target.classList.contains('img-sizes')) {
	  // 	 for (let i = 0; i < img.length; i++) {
   //  	if (target == img[i]) {
		 //    showPic(i);
		 //    break;
   //   } 

   //   }
  	// } else {
   //   	for (let i = 0; i < img.length; i++) {
  	// 				hidePic(i);
  	// 			}
   //   }


      
  	// if (target.tagName == 'IMG') {
   //  for (let i = 0; i < img.length; i++) {
   //  	if (target == img[i]) {
		 //    showPic(i);
		 //    break;
   //   }
   //  }
  	// } else {
  	// 			for (let i = 0; i < img.length; i++) {
  	// 				hidePic(i);
  	// 			}
	  //   // img[i].forEach(function(i) {
   //   //  hidePic(i);
	  //   // });
  	// }
  }, false);

	} else {

		for (let i = 0; i < img.length; i++) {

			img[i].addEventListener('mouseover', function() {
				showPic(i);
			});

			img[i].addEventListener('mouseout', function() {
				hidePic(i);
			})
		}
	}

	function isTouchDevice() {
  return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
	}

	function showPic(i) {
		img[i].style.position = 'relative';
		img[i].style.zIndex = '100';
		img[i].src = `img/${imgHover[i]}.png`;
	}

	function hidePic(i) {
		img[i].style.position = '';
		img[i].style.zIndex = '';
		img[i].src = `img/${imgDefault[i]}.png`;
	}
}


module.exports = picHover;