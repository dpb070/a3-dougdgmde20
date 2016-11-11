$(document).ready(function(){
  // Doug Bradley
  // DGMDE20 - Assignment 3


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



  // Submit processing
  $('button').click(function(submit){
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
