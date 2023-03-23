$(function() {
	$('input[name=phone]').mask('+7 (999) 999-99-99');

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