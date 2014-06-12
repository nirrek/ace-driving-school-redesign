'use strict';

$(function() {
  var $Button = $('.Button');

  $('.js-form').validate({
    errorElement: "label",
    errorClass: "Form-validationError",
    rules: {
      name: {
        required: true
      },
      dob: {
        required: true
      },
      email: {
        required: true,
        email: true,
      },
      mobile: {
        required: true,
        digits: true,
      },
      suburb: {
        required: true
      },
      transmission: {
        required: true
      },
      certiv: {
        required: true
      },
      bluecard: {
        required: true
      },
      experience: {
        required: true
      }
    },
    submitHandler: function(form) {
      $Button.text('Sending...');
      setTimeout(function() {
        $Button.text('✔ Sent');
      }, 1000);
    }
  });
});
