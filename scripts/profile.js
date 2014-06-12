$(function() {
  var isVisible = false;

  $slats = $('.Profile-reviews .Slat');
  $reviews = $('.Profile-reviews');

  $('.CallToAction--secondary').click(function() {
    if (!isVisible) {
      $reviews.slideDown({
        duration: 200,
        complete: function() {
          $slats.velocity('transition.slideDownIn', { stagger: 30 });
          isVisible = true;
        }
      });
    }
  });
});


