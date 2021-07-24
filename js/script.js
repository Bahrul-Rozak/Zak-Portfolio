jQuery(document).ready(function(){ 
	
	/* ---------------------------------------------------------------------- */
	/*	Custom Functions
	/* ---------------------------------------------------------------------- */

	// Logo
	var $logo 	= $('#logo');

    if (location.href.indexOf("#") != -1) {
        $logo.show();
    }
	// Show logo 
	$('.menu .tabs a').click(function() {
	  $logo.fadeIn('slow');
	});
	// Hide logo
	$('.tab-profile').click(function() {
	  $logo.fadeOut('slow');
    });	
    

    // The Portfolio Themes
    
    $('#yellow-color').click(function(e){
        $(".main-wrapper-resume").attr("id", "yellow");
    });

    $('#green-color').click(function(e){
        $(".main-wrapper-resume").attr("id", "green");
    });

    $('#blue-color').click(function(e){
        $(".main-wrapper-resume").attr("id", "blue");
    });

    $('#red-color').click(function(e){
        $(".main-wrapper-resume").attr("id", "red");
    });

    $(".setting-icon").click(function(){
        $(".color-box").toggleClass("main");
	});

	$(".socials-text").click(function(){
	  $(".socialicons").toggleClass("main");
	});
 
	/* ---------------------------------------------------------------------- */
	/*	Menu
	/* ---------------------------------------------------------------------- */
	
	// Needed variables
	var $content 		= $("#content");
	
	// Run easytabs
  	$content.easytabs({
	  animate			: true,
	  updateHash		: false,
	  transitionIn		:'slideDown',
	  transitionOut		:'slideUp',
	  animationSpeed	:600,
	  tabs				:".tmenu",
	  tabActiveClass	:'active',
	});

	
	// Hover menu effect
	$content.find('.tabs li a').hover(
		function() {
			$(this).stop().animate({ marginTop: "-7px" }, 200);
		},function(){
			$(this).stop().animate({ marginTop: "0px" }, 300);
		}
    );

	/* ---------------------------------------------------------------------- */
	/*	Cats Filter
	/* ---------------------------------------------------------------------- */ 
	
	var $catsfilter = $('.cats-filter');

	// Copy categories to item classes
	$catsfilter.find('a').click(function() {
		var currentOption = $(this).attr('data-filter');
		$(this).parent().parent().find('a').removeClass('current');
		$(this).addClass('current');
	});	

	/* ---------------------------------------------------------------------- */
	/*	Portfolio
	/* ---------------------------------------------------------------------- */ 
	
	// Needed variables
	var $plist = $('#portfolio-list');
	var $pfilter = $('#portfolio-filter');
		
	// Run Isotope  
	$plist.isotope({
		filter : '*',
		layoutMode : 'masonry',
		animationOptions : {
		duration : 750,
		easing : 'linear'
	   }
	});	
	
	// Isotope Filter 
	$pfilter.find('a').click(function(){
	  	var selector = $(this).attr('data-filter');
		$plist.isotope({ 
			filter : selector,
			animationOptions :{
				duration : 750,
				easing : 'linear',
				queue : false,
			}
		});
		return false;
	});	 

});