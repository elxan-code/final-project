$(document).ready(function(){

    $('.nav-link').click(function() {
        console.log("Clicked");
        $('.nav-link.active').removeClass('active');
        $('nav-link').addClass('active');
    });

    // $('.dropendd').click(function() {
    //     console.log("Clicked");
    //     $('.submenu-1.active').removeClass('active');
    //     $(".submenu-1").addClass('active');
    // });


});