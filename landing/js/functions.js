// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function ($) {

	/* trigger when page is ready */
	$(document).ready(function (){





	});
  
  $(function () {
    // Slide Toggle responsive menu button
    $("#show-nav-prime").click(function(){
      $(".micromenu .nav-prime").toggle('fast', 'swing', function() {

      }).addClass("clearfix");
      $("#show-nav-prime").toggleClass('active');
    });
    
    $(".slick-slider").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4
    });

  });
  

  

}(window.jQuery || window.$));