(function ($) {
"use strict";

	// pre loader
	$(window).on('load',function() {
		$("#loading").fadeOut(500)
	});
	//data - background
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});


	//mean menu -- mobile menu
	jQuery("#mobile-menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "991"
	});

	// Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('#scroll').fadeIn(200)
        } else{
            $('#scroll').fadeOut(200)
        }
    });
    
    //Animate the scroll to yop
    $('#scroll').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
	});

	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 8000,
			dots: false,
			fade: true,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
			responsive: [{
			breakpoint: 767,
			settings: {
				dots: false,
				arrows: false
			}
			}]
		});
	
		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
			});
		}
		}
		mainSlider();

	// course-active
	$('.course-slider').owlCarousel({
		loop:true,
		margin:30,
		autoplay:true,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:3,
		navText:['<button><i class="fal fa-angle-left"></i></button>','<button><i class="fal fa-angle-right"></i></button>'],
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:2
			},
			992:{
				items:3
			}
		}
	});

	// event-slider-active
	$('.event-slider').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:3,
		navText:['<button><i class="fal fa-angle-left"></i></button>','<button><i class="fal fa-angle-right"></i></button>'],
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:2
			},
			992:{
				items:2
			}
		}
	});

	// blog-slider-active
	$('.blog-slider').owlCarousel({
		loop:true,
		margin:30,
		autoplay:true,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:3,
		navText:['<button><i class="fal fa-angle-left"></i></button>','<button><i class="fal fa-angle-right"></i></button>'],
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:1
			},
			992:{
				items:3
			}
		}
	});

	// teacher-slider-active
	$('.teacher-slider').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:3,
		navText:['<button><i class="fal fa-angle-left"></i></button>','<button><i class="fal fa-angle-right"></i></button>'],
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:3
			},
			992:{
				items:4
			}
		}
	});

	// testi-slider-active
	$('.testi-slider').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:3,
		navText:['<button><i class="fal fa-angle-left"></i></button>','<button><i class="fal fa-angle-right"></i></button>'],
		nav:true,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:1
			},
			992:{
				items:1
			}
		}
	});

	//counter up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
})(jQuery);