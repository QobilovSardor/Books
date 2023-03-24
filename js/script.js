$(function () {
	// $('input[name=phone]').mask('+7 (999) 999-99-99');

	$('.menu-opener').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.navbar').toggleClass('active');
	});
	$('.catalog-btn').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.mymodal').toggleClass('modal-on');
		$('.modal-wrap').toggleClass('active');
	});
});
try {
	(function () {
		var parent = document.querySelector('.range-slider');
		if (!parent) return;

		var rangeS = parent.querySelectorAll('input[type=range]'),
			numberS = parent.querySelectorAll('input[type=number]');

		rangeS.forEach(function (el) {
			el.oninput = function () {
				var slide1 = parseFloat(rangeS[0].value),
					slide2 = parseFloat(rangeS[1].value);

				if (slide1 > slide2) {
					[slide1, slide2] = [slide2, slide1];
					// var tmp = slide2;
					// slide2 = slide1;
					// slide1 = tmp;
				}

				numberS[0].value = slide1;
				numberS[1].value = slide2;
			};
		});

		numberS.forEach(function (el) {
			el.oninput = function () {
				var number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);

				if (number1 > number2) {
					var tmp = number1;
					numberS[0].value = number2;
					numberS[1].value = tmp;
				}

				rangeS[0].value = number1;
				rangeS[1].value = number2;
			};
		});
	})();
} catch (error) {
	console.log(error);
}
try {
	var swiper = new Swiper(".mySwiper", {
		spaceBetween: 20,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			// 360: {
			// 	slidesPerView: 1.5,
			// 	spaceBetween: 16,
			// },
			576: {
				slidesPerView: 1.3,
				spaceBetween: 12,
			},
			768: {
				slidesPerView: 1.6,
				spaceBetween: 12,
			},
			992: {
				slidesPerView: 1.9,
				spaceBetween: 20,
			},
			1920: {
				slidesPerView: 2.5,
				spaceBetween: 20,
			},
		},
	});
} catch (error) {
	console.log(error);
}