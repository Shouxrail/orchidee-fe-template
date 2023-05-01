$(document).ready(() => {
    var st = $(this).scrollTop();
   if (st == 0){
       $('#header-1').show(300);
       $('#header-2').hide(300);
   } else {
        $('#header-1').hide(300);
        $('#header-2').show(300);
   }
});

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st == 0){
       $('#header-1').show(300);
       $('#header-2').hide(300);
   } else {
        $('#header-1').hide(300);
        $('#header-2').show(300);
   }
});

function backToTop() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    
    $("html, body").animate({scrollTop: 0}, 1000);
}