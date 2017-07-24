$(function(){
	var width = (parseInt($('.carrossel .item').outerWidth() + parseInt($('.carrossel .item').css('margin-right')))) * $('carrossel .item').length;
	$('.carrossel').css('width', width);

	var numImage = 4;
	var marginPadding = 30;

	var ident = 0;
	var count = ($('.carrossel .item').length / numImage) - 1;
	var slide = (numImage * marginPadding) + ($('.carrossel img').outerWidth() * numImage);

	$('.forth').click(function(){
		if (ident < count) {
			ident ++;
			$('.carrossel').animate({'margin-left': '-=' +slide+ 'px'}, '500');
		}
	});

	$('.back').click(function(){
		if (ident >= 1) {
			ident --;
			$('.carrossel').animate({'margin-left': '+=' +slide+ 'px'}, '500');
		}
	});
});