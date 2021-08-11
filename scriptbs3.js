// event pada saat link di klik
$('.page-scroll').on('click',function(e) {

	// ambil isi href
	var href = $(this).attr('href');

	// tangkap elemen ybs

	var elemenHref = $(href);

	// pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenHref.offset().top - 50
	}, 1000,'swing');
	
	e.preventDefault();


});


// parallax//

// about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});
// akhir about

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
// jumbotron
$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	})
	
	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	})
	
	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	})
// akhir jumbotron
	
	
	// portfolio

if(wScroll > $('.portfolio').offset().top - 240 ) {
	$('.portfolio .thumbnail').each(function(i) {
		setTimeout(function() {
			$('.portfolio .thumbnail').eq(i).addClass('muncul')
			
		}, 200 * (i + 1));
	});
	

}

})

// akhir portfolio