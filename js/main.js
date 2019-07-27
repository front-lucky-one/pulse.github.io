

$(document).ready(function(){
	// $(".nav,.pulse-content").on("click","a", function (event) {
	// 	event.preventDefault();
	// 	var id  = $(this).attr('href'),
	// 	top = $(id).offset().top;
	// 	$('body,html').animate({scrollTop: top}, 1500);
	// });

	$(".radio").click(function(){
		$(".radio").removeClass("radio_active");
		$(this).addClass("radio_active");
		
	});

	$(".coise").click(function(){
		$(".coise").removeClass("coise_active");
		$(this).addClass("coise_active");
		
	});

});
$(window).scroll(function() {
	var height = $(window).scrollTop();

	/*Если сделали скролл на 100px задаём новый класс для header*/
	if(height > 200){
		$('.header_wrapp').addClass('header-active');
	} else{
		/*Если меньше 100px удаляем класс для header*/
		$('.header_wrapp').removeClass('header-active');
	}

});
