$(document).ready(function(e) {
     window.addEventListener('scroll', function(e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 10,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            $("header").addClass("smaller");
        } else {
           $("header").removeClass("smaller");
        }
    });
	
 $(function() {
  $(".expand").on( "click", function() {
    // $(this).next().slideToggle(200);
    $expand = $(this).find(">:first-child");
    
    if($expand.text() == "+") {
      $expand.text("-");
    } else {
      $expand.text("+");
    }
  });
});
	
//$("div.inner-page-wrapper").css('min-height', $(window).height() - $("header").height() - $("footer").height() + 30);	
});

$(window).resize(function(e) {  
	//$("div.inner-page-wrapper").css('min-height', $(window).height() - $("header").height() - $("footer").height() + 30);
});