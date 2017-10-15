console.log("connected");
$('#register').click(registered)
  function registered () {
    $("#contact").html('<h1>'+ "Thanks for Relaxing with us!" + '<h1>')
  }

  // function validateForm() {
  //       var x = document.forms["contactForm"]["name-field"]["date-field"]["email-field"]["phone-field"].value;
  //       if (x == "") {
  //           alert("Name must be filled out");
  //           return false;
  //       }
  //
  //       if else (x == "") {
  //           alert("Name must be filled out");
  //           return false;
  //       }}

  var radio_button=false;
$('.radio-button').on("click", function(event){
    var this_input=$(this);
        if(this_input.attr('checked1')=='11')
    {

        this_input.attr('checked1','11')

    }
    else
    {
        this_input.attr('checked1','22')

    }
    $('.radio-button').prop('checked', false);
    if(this_input.attr('checked1')=='11')
    {
        this_input.prop('checked', false);
        this_input.attr('checked1','22')
    }
    else{
        this_input.prop('checked', true);
        this_input.attr('checked1','11')
    }

});

     
