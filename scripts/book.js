'use strict';

// Invoke javascript after the 'DOMContentLoaded' event has fired.
$(function() {
  var $Button = $('.Button');

  // ---------------------------------------------------------------------------
  //  Set instructor <select> based upon the querystring on load
  // ---------------------------------------------------------------------------
  var instructorName = getInstructorFromQuerystring();
  if (instructorName !== '') {
    $('#' + instructorName).attr('selected', 'true');
  }

  // ---------------------------------------------------------------------------
  // Initialize form validation
  // ---------------------------------------------------------------------------
  $('.js-form').validate({
    errorElement: "label",
    errorClass: "Form-validationError",
    rules: {
      address: {
        required: true
      },
      transmission: {
        required: true
      },
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

    },
    submitHandler: function(form) {
      $Button.text('Sending...');
      setTimeout(function() {
        $Button.text('✔ Sent');
      }, 1000);
    }
  });
});

/**
 * Gets the instructor name from the querystring in the URL.
 * @return {string} Instructor name if found, the empty string otherwise.
 */
function getInstructorFromQuerystring() {
  // Fetch the querystring
  var querystring = window.location.search,
      queryTokens,
      instructorName = '';

  // Ensure not empty string, and first char is '?' (denotes querystring start)
  if (querystring.length > 0 && querystring[0] === '?') {
    // Remove the ? from the front of the array, then split on the '=' delimiter
    queryTokens = querystring.slice(1).split('=');

    // If the query parameters are for an instructor, assign instructor name
    if (queryTokens[0] === 'name') {
      instructorName = queryTokens[1]; // found instructor name
    }
  }

  return instructorName;
}
