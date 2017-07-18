// scroll image

$(document).ready(function() {
    slideShow();
});

function slideShow() {
    var current = $('.mainBackground .show');
    var next = current.next().length ? current.next():current.siblings().first();
    
    current.hide().removeClass('show');
    next.fadeIn('slow').addClass('show');
    
    setTimeout(slideShow, 4000);
}