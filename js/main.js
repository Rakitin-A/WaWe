$(function(){
    
    $(".menu a, .go-top").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
    $('.slider-blog__inner').slick({
        arrows: false,
        dots:true,
    });

    $('.menu__btn').on('click',function(){
        $('.menu__list').toggleClass('menu__list--active');
    });
var mixer = mixitup('.portfolio__content');

});