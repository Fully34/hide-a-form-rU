$(document).ready(function() {

    $('.form-container').hide();

    //the form starts as hidden
    var formShow = false;

    if(!formShow) {

        $('.tog-btn').text('Show Form'); // -> Starts Hidden
    }

    $('.tog-btn').on('click', function() {

        if (!formShow){ // -> If the form is hidden, we are making it un-hidden
            
            formShow = true; //-> after click, the form will be showing

            $('.form-container').fadeIn(1); //-> since it was hidden before, we need to fadeIn

            $('.tog-btn').text('Hide Form'); //-> now that the form is showing, we need to change the toggle-button text to 'hide form'

        } else if (formShow) { // -> if the form is showing, we are hiding it
            
            formShow = false; //-> after click, the form will be hidden

            $('.form-container').fadeOut(1); //-> since it was showing before, we need to fadeOut

            $('.tog-btn').text('Show Form'); //-> now that the form is hiding, we need to change the toggle-button text to 'show form'
        }
    });



//======================== Using Submit Button ==============================//
    
    // $('.sub-btn').on('click', function() {

    //     event.preventDefault(); //-> preventing auto-refresh

    //     var newText = $('.input-field').val(); //-> setting variable to whatever the textarea contains

    //     // console.log(newText);

    //     if (newText.length !== 0){ //-> if they don't put anything, we don't want to just delete the contents

    //         $('.bio').text(newText); //-> since there is text in the textarea, we are changing the p.bio to that text 

    //         $('.input-field').val('...'); //-> remove the text from the textarea
    //     };
    // });

//========================== Default textarea text =========================//
        
    var defaultText = $('.bio').text();

    $('.input-field').val(defaultText);

//============================ Refresh In Place ============================//


    $('.input-field').on('input', function() {

        var updateText = $(this).val();

        $('.bio').text(updateText);
    });
});