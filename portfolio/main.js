/* ハンバーガーメニュー */
$(function(){
	$('.nav_toggle').on('click', function () {
		$('.nav_toggle, .nav').toggleClass('show');
	});
	})

/* スクロール */
$('a[href^="#"]').click(function() {
	// スクロールの速度
	var speed = 400; // ミリ秒で記述
	var href = $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
	$('body,html').animate({
		scrollTop: position
	}, speed, 'swing');
	return false;
	});

/* フェードイン */
$(function(){
	$(window).scroll(function (){
		$('.left-to-right, .down-to-top').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 250){
				$(this).addClass('scrollin');
			}
		});
	});
});