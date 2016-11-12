$(document).ready(function(){
  // Doug Bradley
  // DGMDE20 - Assignment 3

  // initialize tables to intermediate brightness
  $('#coastal_table').fadeTo("fast",0.80);  // 0.80 = normal slightly dimmed state
  $('#atlantic_table').fadeTo("fast",0.80);

  // brighten atlantic table on hover
  $('#atlantic_table').hover(
    function() {
      $('#atlantic_table').fadeTo("fast",1.0);  //brightened
      $('#coastal_table').fadeTo("fast", 0.50)  // dimmed
    },
    function() {
      $('#coastal_table').fadeTo("fast",0.80);  //return to normal
      $('#atlantic_table').fadeTo("fast",0.80);
    }
  )

  // brighten coastal table on hover
  $('#coastal_table').hover(
    function() {
      $('#coastal_table').fadeTo("fast",1.0);    // brightened
      $('#atlantic_table').fadeTo("fast", 0.50)  // dimmed
    },
    function() {
      $('#coastal_table').fadeTo("fast",0.80);  // return to normal
      $('#atlantic_table').fadeTo("fast",0.80);
    }
  )

  // emphasize row when hovering
  $('tr').hover(
    function () {
      $(this).css("font-weight","bold");
    },
    function () {
      $(this).css("font-weight","");
    }
  );

  // addtionally change color of last row when hovering
  $('tbody tr:last-child').hover(
    function () {
      $(this).css( "color", "red" );
    },
    function () {
      $(this).css( "color", "" );
    }
  );

  // phone field enable/disable from alerts checkbox
  $('#phone').prop( 'disabled', true );
  $('#alerts').click(function(){
    if ($('#alerts').prop('checked')) {
      $('#phone').prop( 'disabled', false );
    }
    else {
      $('#phone').prop( 'disabled', true );
    };
  });

  // show/hide terms (for click event, two action, outside of form requirement)
  // the two actions are terms appear and button label text toggles
  var termState = 0;
  $('#agreement_terms').hide();
  $('#agreement_button').html('Show agreement terms');
  $('#agreement_button').click(function(){
    $('#agreement_terms').toggle();
    if (termState == 0) {
      termState = 1;
      $('#agreement_button').html('Hide agreement terms');
    }
    else {
      termState = 0;
      $('#agreement_button').html('Show agreement terms');
    }
  });

  // Submit processing
  $('#form_submit').click(function(submit){
    // Clear any error messages from previous failed submits
    $('#name_error').html('');
    $('#email_error').html('');

    // simple check for full name - 4 or more characters and includes space
    var nameLengthOK =  ($('#name').val().length > 3);
    var spaceFoundOK = ($('#name').val().indexOf(" ") > 0);
    if ( !nameLengthOK || !spaceFoundOK) {
      $('#name_error').html('Please provide your full name');
      var nameError = true;
    } //end name check

    // simple check for email - 8 or more characters and includes "@" and "."
    var emailLengthOK = ($('#email').val().length > 7);
    var emailAtFoundOK = ($('#email').val().indexOf("@") > 0) ;
    var emailDotFoundOK = ($('#email').val().indexOf(".") > 0);
    if ( !emailLengthOK || !emailAtFoundOK || !emailDotFoundOK  ) {
      $('#email_error').html('Please provide a valid email address');
      var emailError = true;
    } //end email check

    if (nameError || emailError) {
      submit.preventDefault();
    }
  }); //end submit button clicked event

}); //end document ready
