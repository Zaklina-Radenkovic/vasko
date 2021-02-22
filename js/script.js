$(document).ready(function() {

	/*$("h1").click(function() {
    $(this).css("background-color", "#ff0000"); 
  })*/

$('.js--about').waypoint(function(direction) {
		if (direction == "down") {
            $('header').addClass('sticky');
		} else {
            $('header').removeClass('sticky');
		}
	}, {
  	offset: '60px' //55

	});



$('.js--scroll-to-contact').click(function() {
   	 $('html, body').animate({scrollTop: $('.js--contact').offset().top}, 500);
   });


// $('html, body').waypoint(function() {
//  $(this).animate({scrollTop: $('.boy').offset().top}, 100);
//  $('.boy').addClass('yellow');
// });



    

  



/* Animations on scroll 
    $('.js--wp-1').waypoint(function(direction) {
    	$('.js--wp-1').addClass('animated fadeIn');
    }, {
    	offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
    	$('.js--wp-2').addClass('animated fadeInUp');
    }, {
    	offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
    	$('.js--wp-3').addClass('animated fadeIn');
    }, {
    	offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
    	$('.js--wp-4').addClass('animated pulse');
    }, {
    	offset: '50%'
    });




/*var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
*/


// $('.navigation__button').click(function() {
//       var nav = $('.js--header__nav');
        

//       nav.slideToggle('slow', function(){
//         nav.addClass('show');
//       });
        

//     });

});

"use strict";

var mobileNav = document.querySelector('.js--header__nav');
var button = document.querySelector('.navigation__button');

button.addEventListener('click', function() {
  mobileNav.classList.toggle('show');
 
 
});

// document.onreadystatechange = function() { 
//     if (document.readyState !== "complete") { 
//         document.querySelector("body").style.visibility = "hidden"; 
//         document.querySelector("#loader").style.visibility = "visible"; 
//     } else { 
//         document.querySelector("#loader").style.display = "none"; 
//         document.querySelector("body").style.visibility = "visible"; 
//     } 
// }; 


