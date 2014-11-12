// run foundation
$(document).foundation();

// lightbox options
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  titleSrc: 'title',
  gallery: {enabled: true}
  // other options
});


