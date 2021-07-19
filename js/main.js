$(window).scroll(function() {    
   $(".section-title").each(function() {
    var scroll = $(window).scrollTop();
    var ElemPossition = $(this).offset().top;
    if (ElemPossition < scroll+650) {
        //clearHeader, not clearheader - caps H
        $(this).addClass("animate__fadeInLeft");
    }
});
}); 

$(window).scroll(function() {    
    $(".ahead-block").each(function() {
     var scroll = $(window).scrollTop();
     var ElemPossition = $(this).offset().top;
     if (ElemPossition < scroll+500) {
         //clearHeader, not clearheader - caps H
         $(this).addClass("animate__fadeInUp");
     }
 });
 }); 

 $(window).scroll(function() {    
    $("form").each(function() {
     var scroll = $(window).scrollTop();
     var ElemPossition = $(this).offset().top;
     if (ElemPossition < scroll+500) {
         //clearHeader, not clearheader - caps H
         $(this).addClass("animate__fadeInRight");
     }
 });
 }); 
