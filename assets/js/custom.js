/*=============================================================
    Authour URL: www.designbootstrap.com
    
    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */

$(document).ready(function () {

/*====================================
SCROLLING SCRIPTS
======================================*/

$('.scroll-me a').bind('click', function (event) { //just pass scroll-me in design and start scrolling
var $anchor = $(this);
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top
}, 1200, 'easeInOutExpo');
event.preventDefault();
});


/*====================================
SLIDER SCRIPTS
======================================*/


$('#carousel-slider').carousel({
interval: 2000 //TIME IN MILLI SECONDS
});



/*====================================
VAGAS SLIDESHOW SCRIPTS
======================================*/

$.vegas('slideshow', {
backgrounds: [
	

	{ src: 'assets/img/bg.gif', fade: 1000, delay: 10000 },
	{ src: 'assets/img/bg2.gif', fade: 1000, delay: 10000 },
		{ src: 'assets/img/bg5.gif', fade: 1000, delay: 10000 },
		{ src: 'assets/img/bg6.gif', fade: 1000, delay: 10000 }
	
]
})('overlay', {

src: 'assets/js/vegas/overlays/00.png' // SLIDESHOW OVERLAY IMAGE, THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
});





/*====================================
POPUP IMAGE SCRIPTS
======================================*/
$('.fancybox-media').fancybox({
openEffect: 'elastic',
closeEffect: 'elastic',
helpers: {
title: {
type: 'inside'
}
}
});


/*====================================
FILTER FUNCTIONALITY SCRIPTS
======================================*/
$(window).load(function () {

/*
var images = ['bg.gif', 'bg2.gif', 'bg5.gif', 'bg6.gif'];
$('body').css({'background': 'url(assets/img/' + images[Math.floor(Math.random() *  images.length)] + ') no-repeat center  center fixed' });

$('body').css({'-webkit-background-size': 'cover'});
$('body').css({'-moz-background-size': 'cover'});
$('body').css({'background-size': 'cover'});
$('body').css({'-o-background-siz': 'cover'});
*/


var $container = $('#work-div');
$container.isotope({
filter: '*',
animationOptions: {
duration: 750,
easing: 'linear',
queue: false
}
});
$('.caegories a').click(function () {
$('.caegories .active').removeClass('active');
$(this).addClass('active');
var selector = $(this).attr('data-filter');
$container.isotope({
filter: selector,
animationOptions: {
duration: 750,
easing: 'linear',
queue: false
}
});
return false;
});

});



/*====================================
WRITE YOUR CUSTOM SCRIPTS BELOW
======================================*/






});
