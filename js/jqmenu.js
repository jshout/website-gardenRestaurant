// jquery
$(document).ready(function() {
   //Add class .js to the body if JS is enabled
    $("body").addClass("js");
    //Set up the click behavior
    $(".menu-link").click(function() {
        //Toggle the class .active on the hamburger icon
        $(this).toggleClass("active");
        //Toggle the class .active on the menu to make it slide down/up
        $(".menu").toggleClass("active");
    });
    
    $("a").click(function() {
        //Toggle the class .active on the hamburger icon
        $(".menu-link").toggleClass("active");
        //Toggle the class .active on the menu to make it slide down/up
        $(".menu").toggleClass("active");
        
    });  
    
});