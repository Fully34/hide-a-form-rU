$(document).ready(function() {

    $('.form-container').hide();

    //the form starts as hidden
    var formShow = false;

    $('.tog-btn').on('click', function() {

        if (!formShow){
            
            formShow = true;

            $('.form-container').fadeIn(1000);

        } else if (formShow) {

            formShow = false;

            $('.form-container').fadeOut();
        }
    });










})