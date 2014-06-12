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
      mobile: {
        required: true,
        digits: true,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
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
