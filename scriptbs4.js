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
	var delay = 2100
	// loadJ.style.display = "none";
	setTimeout(function(){
		$('.jAwal').addClass('jMuncul') ;
		$('.jKiri').addClass('jMuncul') ;
		$('.jKanan').addClass('jMuncul') ;
		$('.SvgKiri').addClass('SvgMuncul') ;
		$('.SvgTengah').addClass('SvgMuncul') ;
		$('.SvgKanan').addClass('SvgMuncul');
    }, delay)
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


// Preloader
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    var delay = 2000;

    setTimeout(function(){
        loader.style.display = "none";
    }, delay)
})
// Akhir Preloader

function sendEmail(){
	Email.send({
		SecureToken : "b850768e-37b2-4d5d-ad4e-a9f2092e1c6b",
		Host : "smtp.elasticemail.com",
		Username : "yanuarcahyo567@gmail.com",
		Password : "D0F4051BCEE52BAC93E685E8EEEAD96C21CB",
		To : 'yanuarcahyo567@gmail.com',
		From : 'yanuarcahyo567@gmail.com',
		// ReplyTo : document.getElementById("email").value,
		Subject : "You got new email, Please check this one",
		Body : "Nama : " + document.getElementById("nama").value
				+ "<br> Email : " + document.getElementById("email").value
				+ "<br> No Telp : " + document.getElementById("telp").value
				+ "<br> Pesan : " + document.getElementById("pesan").value
	}).then(
	message => alert("Pesan Berhasil Di Kirim, Silahkan Tunggu Balasan. Terimakasih Sudah Mengirim Pesan")
	);
}