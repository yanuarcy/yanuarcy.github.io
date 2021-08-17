// $('.page-scroll').on('click',function() {

// 	// ambil isi href
// 	var href = $(this).attr('href');

// 	// tangkap elemen ybs

// 	var elemenHref = $(href);

// 	// pindahkan scroll
// 	$('html,body').animate({
// 		scrollTop: elemenHref.offset().top - 50
// 	}, 1000, 'swing');
	
	


// });


$(function () {
	$('[data-toggle="tooltip"]').tooltip()
  })



var scroll = new SmoothScroll('a[href*="#"]', {
	// Function. Custom easing pattern
	// If this is set to anything other than null, will override the easing option above
	customEasing: function (time) {

		// return <your formulate with time as a multiplier>

		// Example: easeInOut Quad
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	}
});



// =======parralax======//

// jumbotron load
$(window).on('load', function() {
	$('.jAwal').addClass('jMuncul');
	$('.jKiri').addClass('jMuncul');
	$('.jKanan').addClass('jMuncul');
	$('.SvgKiri').addClass('SvgMuncul');
	$('.SvgTengah').addClass('SvgMuncul');
	$('.SvgKanan').addClass('SvgMuncul');
});
// akhir jumbotron load


// // jumbotron scroll
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	$('.jumbotron svg').css({
		'transform' : 'translate(0px, '+ wScroll/1.1 +'%)'
	});
});

// // akhir jumbotron scroll


// portfolio scroll
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

if(wScroll > $('.portfolio').offset().top - 240 ) {
	$('.portfolio .thumbnail').each(function(i) {
		setTimeout(function() {
			$('.portfolio .thumbnail').eq(i).addClass('muncul')
			
		}, 200 * (i + 1));
	});
	

}

})

// akhir portfolio scroll


// about scroll
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

if(wScroll > $('.about').offset().top - 500 ) {
	$('.about .pKiri').each(function(i) {
		setTimeout(function() {
			$('.about .pKiri').eq(i).addClass('muncul')
			
		}, 100 * (i + 1));
	});
	

}

})
// akhir about scroll

// skill scroll
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

if(wScroll > $('.skill').offset().top - 500 ) {
	$('.skill .pKanan').each(function(i) {
		setTimeout(function() {
			$('.skill .pKanan').eq(i).addClass('Muncul')
			
		}, 100 * (i + 1));
	});
	

}

})

// akhir skill scroll

// ========akhir parallax========/

// buttonscroll
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topBtn').fadeIn();
        } else{
            $('#topBtn').fadeOut();
        }
    });

    $('#topBtn').click(function(){
        $('html, body').animate({scrollTop: 0}, 800);
    });

});
// buttonscroll