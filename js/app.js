/* === VENDOR JS ================================= */

// run foundation
Foundation.global.namespace = ''; // Opera foundation js fix
$(document).foundation();

// lightbox options
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  titleSrc: 'title',
  gallery: {enabled: true}
  // other options
});


/* === APP JS ================================== */

// page scroll effect
var pagePocketScroll = function() {

	var  titleArea = $('#titleArea');
    titleAreaScrolled = "title-area-scrolled";

	$(window).scroll(function() {
	  if($(this).scrollTop() > 0) {
	    titleArea.addClass(titleAreaScrolled);
	  } else {
	    titleArea.removeClass(titleAreaScrolled);
	  }
	});

}

pagePocketScroll();


