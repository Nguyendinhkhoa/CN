$(function(){

//Click trên menu, sẽ target đến id tương ứng
$('header .mogo-menu ul li a').on('click',function (e) {
	e.preventDefault();
	var target = this.hash;
	if (target) {
		$target = $(target);

		$('html, body').stop().animate({
		    'scrollTop': $target.offset().top
		}, 500, 'swing', function () {
		    window.location.hash = target;
		});
	}
 });



});


$(window).scroll(function () {

	if ($(this).scrollTop() >= $("#complication").offset().top  ) {
		var height = $("header .home .mogo-menu").height();
		$("header .home .mogo-menu").addClass('mogo-fixed-menu');
		$("body").css("padding-top", height + "px");
	}
	else {
		$("header .home .mogo-menu").removeClass('mogo-fixed-menu');
		$("body").css("padding-top", 0);

	}


});